import { UnauthorizedError, BadRequestError } from '../utils/error';
import { User } from '../generated/prisma/client';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync';
import {
  createExam as createExamService,
  getAllExams as getAllExamsService,
  deleteExam as deleteExamService,
  updateExam as updateExamService,
  getExamById as getExamByIdService,
  updateExamStatus as updateExamStatusService,
  getExamByCode as getExamByCodeService,
} from '../services/exam.service';
import { zodParse } from '../utils/zod-parse';
import { ExamCreateInputObjectZodSchema } from '../generated/schemas';

const createExam = catchAsync(async (req, res, next) => {
  const user = req.user as User;
  if (!user.tenant_id) {
    throw new UnauthorizedError('User tenant not found');
  }
  const { title, description, duration_minutes } = zodParse(
    ExamCreateInputObjectZodSchema.pick({
      title: true,
      description: true,
      duration_minutes: true,
    }),
    req.body,
  );

  const exam = await createExamService(
    { title, description, duration_minutes },
    user.tenant_id,
  );

  res.status(StatusCodes.CREATED).json({
    type: 'success',
    message: 'Exam created successfully',
    data: exam,
  });
});

const getAllExams = catchAsync(async (req, res, next) => {
  const user = req.user as User;
  if (!user.tenant_id) {
    throw new UnauthorizedError('User tenant not found');
  }

  const exams = await getAllExamsService(user.tenant_id);

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exams fetched successfully',
    data: exams,
  });
});

const getExamById = catchAsync(async (req, res, next) => {
  const user = req.user as User;
  if (!user.tenant_id) {
    throw new UnauthorizedError('User tenant not found');
  }

  if (!req.params.exam_id) {
    throw new BadRequestError('Exam ID is required');
  }

  const { id } = zodParse(ExamCreateInputObjectZodSchema.pick({ id: true }), {
    id: req.params.exam_id,
  });

  const exam = await getExamByIdService(id as string, user.tenant_id);

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exam fetched successfully',
    data: exam,
  });
});

const deleteExam = catchAsync(async (req, res, next) => {
  const user = req.user as User;
  if (!user.tenant_id) {
    throw new UnauthorizedError('User tenant not found');
  }

  if (!req.params.exam_id) {
    throw new BadRequestError('Exam ID is required');
  }

  const { id } = zodParse(ExamCreateInputObjectZodSchema.pick({ id: true }), {
    id: req.params.exam_id,
  });

  await deleteExamService(id as string, user.tenant_id);

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exam deleted successfully',
  });
});

const updateExam = catchAsync(async (req, res, next) => {
  const user = req.user as User;
  if (!user.tenant_id) {
    throw new UnauthorizedError('User tenant not found');
  }

  if (!req.params.exam_id) {
    throw new BadRequestError('Exam ID is required');
  }

  const { id } = zodParse(ExamCreateInputObjectZodSchema.pick({ id: true }), {
    id: req.params.exam_id,
  });

  const { title, description, duration_minutes } = zodParse(
    ExamCreateInputObjectZodSchema.pick({
      title: true,
      description: true,
      duration_minutes: true,
    }),
    req.body,
  );

  await updateExamService(
    id as string,
    { title, description, duration_minutes },
    user.tenant_id,
  );

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exam updated successfully',
  });
});

const updateExamStatus = catchAsync(async (req, res, next) => {
  const user = req.user as User;
  if (!user.tenant_id) {
    throw new UnauthorizedError('User tenant not found');
  }

  if (!req.params.exam_id) {
    throw new BadRequestError('Exam ID is required');
  }

  const statusType = req.url.split('/').pop(); // Get last segment

  if (!statusType || !['publish', 'unpublish'].includes(statusType)) {
    throw new BadRequestError('Invalid status type. Use publish or unpublish');
  }

  const shouldPublish = statusType === 'publish';

  await updateExamStatusService(
    req.params.exam_id as string,
    user.tenant_id,
    shouldPublish,
  );

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: `Exam ${shouldPublish ? 'published' : 'unpublished'} successfully`,
  });
});

export {
  createExam,
  getAllExams,
  getExamById,
  deleteExam,
  updateExam,
  updateExamStatus,
};
