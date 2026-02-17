import { Router } from 'express';
import { requireRole } from '../middlewares/permission.middleware';
import {
  validateBody,
  validateParams,
} from '../middlewares/validation.middleware';
import { RoleEnum } from '../generated/prisma/enums';
import { ExamCreateInputObjectZodSchema } from '../generated/schemas';
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
    requireRole(RoleEnum.ADMIN),
    validateBody(ExamCreateInputObjectZodSchema),
    createExam,
  )
  .get(requireRole(RoleEnum.ADMIN), getAllExams);

router
  .route('/:exam_id')
  .get(
    requireRole(RoleEnum.ADMIN),
    validateParams(ExamCreateInputObjectZodSchema.pick({ id: true })),
    getExamById,
  )
  .put(
    requireRole(RoleEnum.ADMIN),
    validateParams(ExamCreateInputObjectZodSchema.pick({ id: true })),
    updateExam,
  )
  .delete(
    requireRole(RoleEnum.ADMIN),
    validateParams(ExamCreateInputObjectZodSchema.pick({ id: true })),
    deleteExam,
  );

router
  .route('/:exam_id/publish')
  .patch(
    requireRole(RoleEnum.ADMIN),
    validateParams(ExamCreateInputObjectZodSchema.pick({ id: true })),
    updateExamStatus,
  );

router
  .route('/:exam_id/unpublish')
  .patch(
    requireRole(RoleEnum.ADMIN),
    validateParams(ExamCreateInputObjectZodSchema.pick({ id: true })),
    updateExamStatus,
  );
export default router;
