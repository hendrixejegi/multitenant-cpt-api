// src/services/auth.service/routes/admin.auth.routes.ts
import { Router } from 'express';
import { 
  registerAdmin, 
  loginAdmin, 
  getCurrentAdmin,
  logoutAdmin 
} from '../controllers/admin.auth.controller';
import { authenticateToken, requireAdmin } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// Protected routes
router.get('/me', authenticateToken, requireAdmin, getCurrentAdmin);
router.post('/logout', authenticateToken, requireAdmin, logoutAdmin);

export default router;