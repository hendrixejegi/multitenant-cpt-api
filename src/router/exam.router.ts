import { Router } from 'express';
import { requireRole } from '../middlewares/permission.middleware';
import { validateBody } from '../middlewares/validation.middleware';
import { RoleEnum } from '../generated/prisma/enums';
import { ExamCreateInputObjectZodSchema } from '../generated/schemas';
import { createExam } from '../controllers/exam.controller';

const router = Router();

router
  .route('/')
  .post(
    requireRole(RoleEnum.ADMIN),
    validateBody(ExamCreateInputObjectZodSchema),
    createExam,
  );

export default router;
