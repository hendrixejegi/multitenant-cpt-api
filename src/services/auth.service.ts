import bcrypt from 'bcrypt';
import jwt, {
  type JwtPayload,
  type Secret,
  type SignOptions,
} from 'jsonwebtoken';
import type { QueryResultRow } from 'pg';
import {
  BadRequestError,
  FailedDependencyError,
  UnauthorizedError,
} from '../utils/error';
import { pgPool } from '../utils/pg';

interface RegisterAdminInput {
  organizationName: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface AuthJwtPayload extends JwtPayload {
  sub: string;
  user_id: string;
  tenant_id: string;
  role: string;
}

interface IssuedToken {
  token: string;
  tokenType: 'Bearer';
  expiresIn: string;
}

interface AuthTenant extends QueryResultRow {
  id: string;
  organization_name: string;
  created_at: Date | null;
  updated_at: Date | null;
}

interface AuthUser extends QueryResultRow {
  id: string;
  tenant_id: string;
  email: string;
  password_hash: string;
  role: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

interface SafeUser extends QueryResultRow {
  id: string;
  tenant_id: string;
  email: string;
  role: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}

interface RegisterAdminResult {
  tenant: AuthTenant;
  admin: SafeUser;
  jwt: IssuedToken;
}

interface LoginResult {
  user: SafeUser;
  jwt: IssuedToken;
}

const PASSWORD_SALT_ROUNDS = 10;
const ACCESS_TOKEN_TTL = '1d';
const ADMIN_ROLE = 'admin';

function toSafeUser(user: AuthUser): SafeUser {
  return {
    id: user.id,
    tenant_id: user.tenant_id,
    email: user.email,
    role: user.role,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
}

function getJwtSecret(): Secret {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }

  return secret;
}

async function hash(arg: string) {
  const result = await bcrypt.hash(arg, PASSWORD_SALT_ROUNDS);
  return result;
}

async function compare(arg: string, enc: string) {
  const result = await bcrypt.compare(arg, enc);
  return result;
}

function issueJwt(
  user: Pick<SafeUser, 'id' | 'tenant_id' | 'role'>,
): IssuedToken {
  const role = (user.role ?? ADMIN_ROLE).toLowerCase();

  // Token payload includes tenant and role claims to support tenant-aware auth downstream.
  const payload: AuthJwtPayload = {
    sub: user.id,
    user_id: user.id,
    tenant_id: user.tenant_id,
    role,
  };

  const token = jwt.sign(payload, getJwtSecret(), {
    expiresIn: ACCESS_TOKEN_TTL,
    algorithm: 'HS256',
  } as SignOptions);

  return {
    token,
    tokenType: 'Bearer',
    expiresIn: ACCESS_TOKEN_TTL,
  };
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isPgUniqueViolation(
  error: unknown,
): error is { code: string; detail?: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code: string }).code === '23505'
  );
}

async function registerOrganizationAndAdmin(
  input: RegisterAdminInput,
): Promise<RegisterAdminResult> {
  const organizationName = input.organizationName.trim();
  const email = normalizeEmail(input.email);

  if (!organizationName) {
    throw new BadRequestError('Organization name is required');
  }

  const client = await pgPool.connect();

  try {
    await client.query('BEGIN');

    const existingTenant = await client.query<{ id: string }>(
      `
        SELECT id
        FROM public.tenants
        WHERE lower(organization_name) = lower($1)
        LIMIT 1
      `,
      [organizationName],
    );

    if ((existingTenant.rowCount ?? 0) > 0) {
      throw new BadRequestError('Organization already exists');
    }

    const existingAdmin = await client.query<{ id: string }>(
      `
        SELECT id
        FROM public.users
        WHERE lower(email) = lower($1)
          AND lower(COALESCE(role, '')) = $2
        LIMIT 1
      `,
      [email, ADMIN_ROLE],
    );

    if ((existingAdmin.rowCount ?? 0) > 0) {
      throw new BadRequestError('Admin with this email already exists');
    }

    const passwordHash = await hash(input.password);

    // Explicit transaction keeps tenant + admin creation atomic in Neon.
    const tenantResult = await client.query<AuthTenant>(
      `
        INSERT INTO public.tenants (organization_name)
        VALUES ($1)
        RETURNING id, organization_name, created_at, updated_at
      `,
      [organizationName],
    );

    const tenant = tenantResult.rows[0];

    const adminResult = await client.query<AuthUser>(
      `
        INSERT INTO public.users (tenant_id, email, password_hash, role)
        VALUES ($1, $2, $3, $4)
        RETURNING id, tenant_id, email, password_hash, role, created_at, updated_at
      `,
      [tenant.id, email, passwordHash, ADMIN_ROLE],
    );

    const admin = adminResult.rows[0];

    await client.query('COMMIT');

    return {
      tenant,
      admin: toSafeUser(admin),
      jwt: issueJwt(toSafeUser(admin)),
    };
  } catch (error) {
    try {
      await client.query('ROLLBACK');
    } catch {
      // If rollback fails we still throw the original error for clarity.
    }

    if (error instanceof BadRequestError) {
      throw error;
    }

    if (isPgUniqueViolation(error)) {
      throw new BadRequestError(
        'Organization or admin email already exists',
        error.detail,
      );
    }

    throw new FailedDependencyError(
      'Database Error',
      'Failed to create organization and admin',
      error,
    );
  } finally {
    client.release();
  }
}

async function authenticateAdmin(input: LoginInput): Promise<LoginResult> {
  const email = normalizeEmail(input.email);

  const result = await pgPool.query<AuthUser>(
    `
      SELECT id, tenant_id, email, password_hash, role, created_at, updated_at
      FROM public.users
      WHERE lower(email) = lower($1)
        AND lower(COALESCE(role, '')) = $2
      ORDER BY created_at DESC
      LIMIT 1
    `,
    [email, ADMIN_ROLE],
  );

  const user = result.rows[0];

  // Same error for "user not found" and "bad password" to avoid credential probing.
  if (!user) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const isPasswordValid = await compare(input.password, user.password_hash);

  if (!isPasswordValid) {
    throw new UnauthorizedError('Invalid email or password');
  }

  return {
    user: toSafeUser(user),
    jwt: issueJwt(toSafeUser(user)),
  };
}

async function getUserById(id: string) {
  const result = await pgPool.query<SafeUser>(
    `
      SELECT id, tenant_id, email, role, created_at, updated_at
      FROM public.users
      WHERE id = $1
      LIMIT 1
    `,
    [id],
  );

  return result.rows[0] ?? null;
}

async function getUserByEmail(email: string) {
  const result = await pgPool.query<SafeUser>(
    `
      SELECT id, tenant_id, email, role, created_at, updated_at
      FROM public.users
      WHERE lower(email) = lower($1)
      ORDER BY created_at DESC
      LIMIT 1
    `,
    [normalizeEmail(email)],
  );

  return result.rows[0] ?? null;
}

export {
  getUserById,
  getUserByEmail,
  hash,
  compare,
  issueJwt,
  registerOrganizationAndAdmin,
  authenticateAdmin,
};

export type { RegisterAdminInput, LoginInput, SafeUser, AuthJwtPayload };
