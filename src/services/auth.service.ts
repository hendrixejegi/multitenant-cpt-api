import pool from '../database/pool';
import { RegisterDto, LoginDto, User, Tenant, UserResponse } from '../types';
import { hashPassword, comparePassword } from '../utils/password';
import { generateToken } from '../utils/jwt';
import { PoolClient } from 'pg';

export class AuthService {
  /**
   * Register a new organization with an admin user (atomic transaction)
   */
  static async register(dto: RegisterDto): Promise<{
    token: string;
    user: UserResponse;
  }> {
    const client: PoolClient = await pool.connect();

    try {
      // Start transaction
      await client.query('BEGIN');

      // 1. Check if subdomain already exists
      const subdomainCheck = await client.query(
        'SELECT id FROM tenants WHERE subdomain = $1',
        [dto.subdomain.toLowerCase()]
      );

      if (subdomainCheck.rows.length > 0) {
        throw new Error('Subdomain already exists');
      }

      // 2. Create tenant (organization)
      const tenantResult = await client.query<Tenant>(
        `INSERT INTO tenants (organization_name, subdomain, status)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [dto.organization_name, dto.subdomain.toLowerCase(), 'active']
      );

      const tenant = tenantResult.rows[0];

      // 3. Check if email already exists for this tenant
      const emailCheck = await client.query(
        'SELECT id FROM users WHERE tenant_id = $1 AND email = $2',
        [tenant.id, dto.email.toLowerCase()]
      );

      if (emailCheck.rows.length > 0) {
        throw new Error('Email already exists for this organization');
      }

      // 4. Hash password
      const passwordHash = await hashPassword(dto.password);

      // 5. Create admin user
      const userResult = await client.query<User>(
        `INSERT INTO users (tenant_id, email, password_hash, first_name, last_name, role, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING *`,
        [
          tenant.id,
          dto.email.toLowerCase(),
          passwordHash,
          dto.first_name,
          dto.last_name,
          'admin',
          'active'
        ]
      );

      const user = userResult.rows[0];

      // Commit transaction
      await client.query('COMMIT');

      // 6. Generate JWT token
      const token = generateToken({
        user_id: user.id,
        tenant_id: user.tenant_id,
        role: user.role,
        email: user.email
      });

      // 7. Return user response
      const userResponse: UserResponse = {
        id: user.id,
        tenant_id: user.tenant_id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        status: user.status,
        organization_name: tenant.organization_name
      };

      return { token, user: userResponse };
    } catch (error) {
      // Rollback transaction on error
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  /**
   * Authenticate admin user and return JWT token
   */
  static async login(dto: LoginDto): Promise<{
    token: string;
    user: UserResponse;
  }> {
    try {
      // 1. Find user by email with tenant information
      const result = await pool.query<User & { organization_name: string }>(
        `SELECT u.*, t.organization_name
         FROM users u
         JOIN tenants t ON u.tenant_id = t.id
         WHERE u.email = $1 AND u.status = 'active'`,
        [dto.email.toLowerCase()]
      );

      if (result.rows.length === 0) {
        throw new Error('Invalid email or password');
      }

      const user = result.rows[0];

      // 2. Verify password
      const isPasswordValid = await comparePassword(dto.password, user.password_hash);

      if (!isPasswordValid) {
        throw new Error('Invalid email or password');
      }

      // 3. Check if user has admin role
      if (user.role !== 'admin') {
        throw new Error('Access denied. Admin privileges required.');
      }

      // 4. Generate JWT token
      const token = generateToken({
        user_id: user.id,
        tenant_id: user.tenant_id,
        role: user.role,
        email: user.email
      });

      // 5. Return user response
      const userResponse: UserResponse = {
        id: user.id,
        tenant_id: user.tenant_id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        status: user.status,
        organization_name: user.organization_name
      };

      return { token, user: userResponse };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get current user profile by user ID
   */
  static async getCurrentUser(userId: string, tenantId: string): Promise<UserResponse> {
    try {
      const result = await pool.query<User & { organization_name: string }>(
        `SELECT u.*, t.organization_name
         FROM users u
         JOIN tenants t ON u.tenant_id = t.id
         WHERE u.id = $1 AND u.tenant_id = $2 AND u.status = 'active'`,
        [userId, tenantId]
      );

      if (result.rows.length === 0) {
        throw new Error('User not found');
      }

      const user = result.rows[0];

      const userResponse: UserResponse = {
        id: user.id,
        tenant_id: user.tenant_id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        status: user.status,
        organization_name: user.organization_name
      };

      return userResponse;
    } catch (error) {
      throw error;
    }
  }
}
