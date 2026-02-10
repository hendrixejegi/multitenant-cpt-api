// src/services/auth.service/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../services/jwt.service';
import { ApiResponse } from '../types/auth.types';

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        email: string;
        role: string;
        tenantId: string;
        type: 'admin' | 'student_exam';
      };
      tenantId?: string;
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

    if (!token) {
      const response: ApiResponse = {
        success: false,
        message: 'Access token is required',
      };
      return res.status(401).json(response);
    }

    // Verify token
    const decoded = JwtService.verifyToken(token);
    
    // Attach user to request
    req.user = {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
      tenantId: decoded.tenantId,
      type: decoded.type,
    };

    // Attach tenantId for easy access
    req.tenantId = decoded.tenantId;

    console.log(`🔐 Authenticated user: ${decoded.email} (${decoded.role})`);
    next();
  } catch (error) {
    const err = error as Error;
    const response: ApiResponse = {
      success: false,
      message: 'Invalid or expired token',
      error: err.message,
    };
    res.status(401).json(response);
  }
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    const response: ApiResponse = {
      success: false,
      message: 'Authentication required',
    };
    return res.status(401).json(response);
  }

  if (req.user.type !== 'admin') {
    const response: ApiResponse = {
      success: false,
      message: 'Admin access required',
    };
    return res.status(403).json(response);
  }

  next();
};

export const requireStudent = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    const response: ApiResponse = {
      success: false,
      message: 'Authentication required',
    };
    return res.status(401).json(response);
  }

  if (req.user.type !== 'student_exam') {
    const response: ApiResponse = {
      success: false,
      message: 'Student access required',
    };
    return res.status(403).json(response);
  }

  next();
};

// Middleware to extract tenant from subdomain or header
export const extractTenant = (req: Request, res: Response, next: NextFunction) => {
  // Check for tenant in subdomain (e.g., tenant1.localhost:3000)
  const host = req.headers.host || '';
  const subdomain = host.split('.')[0];
  
  // Or check for custom header
  const tenantHeader = req.headers['x-tenant-id'] as string;
  
  // For now, we'll rely on JWT token for tenant info
  // This can be enhanced based on team's multi-tenancy approach
  next();
};
