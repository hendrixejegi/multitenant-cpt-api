// src/services/auth.service/routes/student.auth.routes.ts
import { Router } from 'express';
import { 
  enterExam, 
  validateStudentToken,
  endExam 
} from '../controllers/student.auth.controller';
import { authenticateToken, requireStudent } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.post('/enter-exam', enterExam);
router.post('/validate-token', validateStudentToken);

// Protected routes
router.post('/end-exam', authenticateToken, requireStudent, endExam);

export default router;