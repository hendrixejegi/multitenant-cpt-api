import { Router } from 'express';
import { requireRole } from '../middlewares/permission.middleware';
import { RoleEnum } from '../generated/prisma/enums';
import passport from 'passport';
import {
  createQuestion,
  getExamQuestionsandOptions,
  deleteQuestion,
  updateQuestion,
} from '../controllers/questions.controller';

const router = Router();

router
  .route('/:exam_id/questions')
  .get(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    getExamQuestionsandOptions,
  )
  .post(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    createQuestion,
  );

router
  .route('/:exam_id/questions/:question_id')
  .delete(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    deleteQuestion,
  )
  .patch(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    updateQuestion,
  );

export default router;
