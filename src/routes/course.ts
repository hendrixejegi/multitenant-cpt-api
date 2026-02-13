import { Router } from 'express';
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from '../controllers/course';
import { authenticate } from '../middlewares/auth';

const router = Router();

// Protected routes - require authentication
router.post('/', authenticate, createCourse);
router.get('/', authenticate, getCourses);
router.get('/:id', authenticate, getCourseById);
router.put('/:id', authenticate, updateCourse);
router.delete('/:id', authenticate, deleteCourse);

export default router;
