import { Router } from 'express';
import {
  startExam,
  getStudentAttempt,
  checkAnswer,
  submitAttempt,
} from '../controllers/students.controller';
import passport from 'passport';
import { requireRole } from '../middlewares/permission.middleware';
import { RoleEnum } from '../generated/prisma/enums';

const router = Router();

router.route('/exams/start').post(startExam);

router
  .route('/attempts/:attempt_id')
  .get(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.STUDENT),
    getStudentAttempt,
  );

router
  .route('/attempts/:attemptId/answer')
  .post(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.STUDENT),
    checkAnswer,
  );

router
  .route('/attempts/:attemptId/submit')
  .patch(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.STUDENT),
    submitAttempt,
  );

export default router;
