import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { RegisterDto, LoginDto, ApiResponse, AuthResponse, AuthRequest } from '../types';

export class AuthController {
  /**
   * POST /auth/register
   * Register a new organization and admin user
   */
  static async register(req: Request, res: Response<ApiResponse<AuthResponse['data']>>): Promise<void> {
    try {
      const dto: RegisterDto = req.body;

      // Call service to register
      const result = await AuthService.register(dto);

      res.status(201).json({
        success: true,
        message: 'Organization and admin user created successfully',
        data: {
          token: result.token,
          user: result.user
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific errors
        if (error.message.includes('already exists')) {
          res.status(409).json({
            success: false,
            message: error.message,
            error: 'CONFLICT'
          });
          return;
        }

        res.status(400).json({
          success: false,
          message: error.message,
          error: 'BAD_REQUEST'
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Internal server error during registration',
          error: 'INTERNAL_SERVER_ERROR'
        });
      }
    }
  }

  /**
   * POST /auth/login
   * Authenticate admin user
   */
  static async login(req: Request, res: Response<ApiResponse<AuthResponse['data']>>): Promise<void> {
    try {
      const dto: LoginDto = req.body;

      // Call service to login
      const result = await AuthService.login(dto);

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: {
          token: result.token,
          user: result.user
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        // Security: Don't reveal whether email exists
        if (error.message.includes('Invalid email or password') || 
            error.message.includes('Access denied')) {
          res.status(401).json({
            success: false,
            message: error.message,
            error: 'UNAUTHORIZED'
          });
          return;
        }

        res.status(400).json({
          success: false,
          message: error.message,
          error: 'BAD_REQUEST'
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Internal server error during login',
          error: 'INTERNAL_SERVER_ERROR'
        });
      }
    }
  }

  /**
   * GET /auth/me
   * Get current authenticated user profile
   */
  static async getCurrentUser(req: AuthRequest, res: Response<ApiResponse>): Promise<void> {
    try {
      // User info is attached to request by auth middleware
      if (!req.user) {
        res.status(401).json({
          success: false,
          message: 'Authentication required',
          error: 'UNAUTHORIZED'
        });
        return;
      }

      // Get user profile from database
      const user = await AuthService.getCurrentUser(req.user.user_id, req.user.tenant_id);

      res.status(200).json({
        success: true,
        message: 'User profile retrieved successfully',
        data: user
      });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'User not found') {
          res.status(404).json({
            success: false,
            message: error.message,
            error: 'NOT_FOUND'
          });
          return;
        }

        res.status(400).json({
          success: false,
          message: error.message,
          error: 'BAD_REQUEST'
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Internal server error retrieving user profile',
          error: 'INTERNAL_SERVER_ERROR'
        });
      }
    }
  }
}
