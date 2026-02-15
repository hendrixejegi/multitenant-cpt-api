import { Response, NextFunction } from 'express';
import { AuthRequest, ApiResponse } from '../types';
import { verifyToken } from '../utils/jwt';

/**
 * Middleware to verify JWT token and authenticate requests
 */
export const authenticateToken = async (
  req: AuthRequest,
  res: Response<ApiResponse>,
  next: NextFunction
): Promise<void> => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.',
        error: 'UNAUTHORIZED'
      });
      return;
    }

    // Verify token
    const decoded = verifyToken(token);

    // Attach user info to request
    req.user = decoded;

    next();
  } catch (error) {
    if (error instanceof Error) {
      res.status(403).json({
        success: false,
        message: error.message,
        error: 'FORBIDDEN'
      });
    } else {
      res.status(403).json({
        success: false,
        message: 'Invalid or expired token',
        error: 'FORBIDDEN'
      });
    }
  }
};

/**
 * Middleware to check if user has admin role
 */
export const requireAdmin = (
  req: AuthRequest,
  res: Response<ApiResponse>,
  next: NextFunction
): void => {
  if (!req.user) {
    res.status(401).json({
      success: false,
      message: 'Authentication required',
      error: 'UNAUTHORIZED'
    });
    return;
  }

  if (req.user.role !== 'admin') {
    res.status(403).json({
      success: false,
      message: 'Admin access required',
      error: 'FORBIDDEN'
    });
    return;
  }

  next();
};
