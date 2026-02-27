import { Router } from 'express';
import { startExam, getAttempt } from '../controllers/students.controller';
import passport from 'passport';
import { requireRole } from '../middlewares/permission.middleware';
import { RoleEnum } from '../generated/prisma/enums';

const router = Router();

router.route('/exams/start').post(startExam);

router
  .route('/attempt/:attempt_id')
  .get(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.STUDENT),
    getAttempt,
  );

export default router;
