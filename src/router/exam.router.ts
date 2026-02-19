import { Router } from 'express';
import { requireRole } from '../middlewares/permission.middleware';
import { RoleEnum } from '../generated/prisma/enums';
import passport from 'passport';
import {
  createExam,
  getAllExams,
  getExamById,
  updateExam,
  updateExamStatus,
  deleteExam,
} from '../controllers/exam.controller';

const router = Router();

router
  .route('/')

  .post(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    createExam,
  )
  .get(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    getAllExams,
  );

router
  .route('/:exam_id')
  .get(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    getExamById,
  )
  .patch(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    updateExam,
  )
  .delete(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    deleteExam,
  );

router
  .route('/:exam_id/publish')
  .patch(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    updateExamStatus,
  );

router
  .route('/:exam_id/unpublish')
  .patch(
    passport.authenticate('jwt', { session: false }),
    requireRole(RoleEnum.ADMIN),
    updateExamStatus,
  );
export default router;
