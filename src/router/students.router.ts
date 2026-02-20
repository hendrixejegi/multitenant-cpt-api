import { Router } from 'express';
import { startExam } from '../controllers/students.controller';

const router = Router();

router.route('/exams/start').post(startExam);

export default router;
