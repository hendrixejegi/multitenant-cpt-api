import { Router } from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/user';
import { authenticate } from '../middlewares/auth';

const router = Router();

// Protected routes - require authentication
router.get('/profile', authenticate, getUserProfile);
router.put('/profile', authenticate, updateUserProfile);

export default router;
