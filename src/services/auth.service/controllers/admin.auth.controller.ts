// src/services/auth.service/controllers/admin.auth.controller.ts
import { Request, Response } from 'express';
import { PasswordService } from '../services/password.service';
import { JwtService } from '../services/jwt.service';
import { 
  RegisterAdminRequest, 
  LoginRequest, 
  ApiResponse 
} from '../types/auth.types';
import { validateEmail } from '../utils/validators';
import { ERROR_MESSAGES } from '../utils/constants';

// Temporary in-memory storage (we'll replace with database later)
const temporaryUsers: any[] = [];

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const data: RegisterAdminRequest = req.body;
    
    // Validate input
    if (!data.email || !data.password || !data.firstName || !data.lastName || !data.organizationName) {
      const response: ApiResponse = {
        success: false,
        message: 'All fields are required: email, password, firstName, lastName, organizationName',
      };
      return res.status(400).json(response);
    }

    // Validate email
    if (!validateEmail(data.email)) {
      const response: ApiResponse = {
        success: false,
        message: ERROR_MESSAGES.INVALID_EMAIL,
      };
      return res.status(400).json(response);
    }

    // Validate password
    const passwordValidation = PasswordService.validatePasswordStrength(data.password);
    if (!passwordValidation.isValid) {
      const response: ApiResponse = {
        success: false,
        message: 'Password validation failed',
        error: passwordValidation.errors.join(', '),
      };
      return res.status(400).json(response);
    }

    // Check if user already exists (temporary - will use database later)
    const existingUser = temporaryUsers.find(user => user.email === data.email);
    if (existingUser) {
      const response: ApiResponse = {
        success: false,
        message: ERROR_MESSAGES.USER_EXISTS,
      };
      return res.status(409).json(response);
    }

    // Hash password
    const passwordHash = await PasswordService.hashPassword(data.password);

    // Generate a mock tenant ID (will come from Tenant Service later)
    const mockTenantId = `tenant_${Date.now()}`;

    // Create user object
    const newUser = {
      id: `user_${Date.now()}`,
      email: data.email,
      passwordHash,
      firstName: data.firstName,
      lastName: data.lastName,
      role: 'tenant_admin' as const,
      tenantId: mockTenantId,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Store temporarily
    temporaryUsers.push(newUser);

    // Generate JWT token
    const token = JwtService.generateAdminToken(
      newUser.id,
      newUser.email,
      newUser.role,
      newUser.tenantId
    );

    // Prepare response (don't send password hash)
    const userResponse = {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      role: newUser.role,
      tenantId: newUser.tenantId,
      createdAt: newUser.createdAt,
    };

    const response: ApiResponse = {
      success: true,
      message: 'Admin registered successfully',
      data: {
        user: userResponse,
        token,
        organizationName: data.organizationName,
      },
      note: 'Tenant will be created by Tenant Service in actual implementation',
    };

    res.status(201).json(response);
  } catch (error) {
    const err = error as Error;
    console.error('Registration error:', err);
    
    const response: ApiResponse = {
      success: false,
      message: 'Registration failed',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    };
    res.status(500).json(response);
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const data: LoginRequest = req.body;

    // Validate input
    if (!data.email || !data.password) {
      const response: ApiResponse = {
        success: false,
        message: 'Email and password are required',
      };
      return res.status(400).json(response);
    }

    // Validate email
    if (!validateEmail(data.email)) {
      const response: ApiResponse = {
        success: false,
        message: ERROR_MESSAGES.INVALID_EMAIL,
      };
      return res.status(400).json(response);
    }

    // Find user (temporary - will use database later)
    const user = temporaryUsers.find(u => u.email === data.email);
    if (!user) {
      const response: ApiResponse = {
        success: false,
        message: ERROR_MESSAGES.INVALID_CREDENTIALS,
      };
      return res.status(401).json(response);
    }

    // Check if user is active
    if (!user.isActive) {
      const response: ApiResponse = {
        success: false,
        message: 'Account is deactivated',
      };
      return res.status(401).json(response);
    }

    // Verify password
    const isPasswordValid = await PasswordService.comparePassword(
      data.password,
      user.passwordHash
    );

    if (!isPasswordValid) {
      const response: ApiResponse = {
        success: false,
        message: ERROR_MESSAGES.INVALID_CREDENTIALS,
      };
      return res.status(401).json(response);
    }

    // Update last login
    user.lastLoginAt = new Date();

    // Generate JWT token
    const token = JwtService.generateAdminToken(
      user.id,
      user.email,
      user.role,
      user.tenantId
    );

    // Prepare response
    const userResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      tenantId: user.tenantId,
      lastLoginAt: user.lastLoginAt,
    };

    const response: ApiResponse = {
      success: true,
      message: 'Login successful',
      data: {
        user: userResponse,
        token,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    const err = error as Error;
    console.error('Login error:', err);
    
    const response: ApiResponse = {
      success: false,
      message: 'Login failed',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    };
    res.status(500).json(response);
  }
};

export const getCurrentAdmin = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      const response: ApiResponse = {
        success: false,
        message: 'User not authenticated',
      };
      return res.status(401).json(response);
    }

    // Find user (temporary - will use database later)
    const user = temporaryUsers.find(u => u.id === req.user?.userId);
    
    if (!user) {
      const response: ApiResponse = {
        success: false,
        message: 'User not found',
      };
      return res.status(404).json(response);
    }

    // Prepare response (without sensitive data)
    const userResponse = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      tenantId: user.tenantId,
      lastLoginAt: user.lastLoginAt,
      createdAt: user.createdAt,
    };

    const response: ApiResponse = {
      success: true,
      message: 'Admin profile retrieved successfully',
      data: userResponse,
    };

    res.status(200).json(response);
  } catch (error) {
    const err = error as Error;
    console.error('Get profile error:', err);
    
    const response: ApiResponse = {
      success: false,
      message: 'Failed to retrieve profile',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined,
    };
    res.status(500).json(response);
  }
};

export const logoutAdmin = async (req: Request, res: Response) => {
  // In a real app, you would invalidate the token (add to blacklist)
  // For now, just return success - client should delete the token
  
  const response: ApiResponse = {
    success: true,
    message: 'Logout successful. Please delete the token on client side.',
    note: 'Implement token blacklist in production',
  };
  
  res.status(200).json(response);
};