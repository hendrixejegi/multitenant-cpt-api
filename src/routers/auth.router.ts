import { Router, type NextFunction, type Request, type Response } from 'express';
import passport from 'passport';
import z from 'zod';
import { requireRole } from '../middlewares/permission.middleware';
import {
  authenticateAdmin,
  registerOrganizationAndAdmin,
  type SafeUser,
} from '../services/auth.service';
import type { ApiResponse } from '../types/api';
import { zodParse } from '../utils/zod-parse';

const registerSchema = z.object({
  organizationName: z.string().min(2).max(100),
  email: z.email().max(255),
  password: z.string().min(8).max(200),
});

const loginSchema = z.object({
  email: z.email().max(255),
  password: z.string().min(1).max(200),
});

const router = Router();

router.post(
  '/register',
  async (req: Request, res: Response<ApiResponse>, next: NextFunction) => {
    try {
      const payload = zodParse(registerSchema, req.body);
      const result = await registerOrganizationAndAdmin(payload);

      res.status(201).json({
        type: 'success',
        message: 'Organization and admin account created successfully',
        data: {
          tenant: result.tenant,
          admin: result.admin,
          auth: result.jwt,
        },
      });
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/login',
  async (req: Request, res: Response<ApiResponse>, next: NextFunction) => {
    try {
      const payload = zodParse(loginSchema, req.body);
      const result = await authenticateAdmin(payload);

      res.status(200).json({
        type: 'success',
        message: 'Login successful',
        data: {
          user: result.user,
          auth: result.jwt,
        },
      });
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  '/me',
  // Passport verifies the JWT and attaches the hydrated user to `req.user`.
  passport.authenticate('jwt', { session: false }),
  requireRole('admin'),
  (req: Request, res: Response<ApiResponse>) => {
    const currentUser = req.user as SafeUser;

    res.status(200).json({
      type: 'success',
      data: {
        id: currentUser.id,
        tenant_id: currentUser.tenant_id,
        email: currentUser.email,
        role: currentUser.role,
        created_at: currentUser.created_at,
        updated_at: currentUser.updated_at,
      },
    });
  },
);

export default router;
