import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { 
  validateRegistration, 
  validateLogin, 
  handleValidationErrors 
} from '../middleware/validation.middleware';
import { authenticateToken, requireAdmin } from '../middleware/auth.middleware';

const router = Router();

/**
 * @route   POST /auth/register
 * @desc    Register a new organization and create initial admin user
 * @access  Public
 */
router.post(
  '/register',
  validateRegistration,
  handleValidationErrors,
  AuthController.register
);

/**
 * @route   POST /auth/login
 * @desc    Authenticate admin and get JWT token
 * @access  Public
 */
router.post(
  '/login',
  validateLogin,
  handleValidationErrors,
  AuthController.login
);

/**
 * @route   GET /auth/me
 * @desc    Get current authenticated admin's profile
 * @access  Private (Admin Token Required)
 */
router.get(
  '/me',
  authenticateToken,
  requireAdmin,
  AuthController.getCurrentUser
);

export default router;
