import {
  AppError,
  UnauthorizedError,
  BadRequestError,
  NotFoundError,
} from '../utils/error';
import { RoleEnum, User } from '../generated/prisma/client';
import {
  ExamCreateInput,
  ExamUpdateInput,
} from '../generated/prisma/models.js';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync';
import {
  createExam as createExamService,
  getAllExams as getAllExamsService,
  deleteExam as deleteExamService,
  updateExam as updateExamService,
  getExamById as getExamByIdService,
  updateExamStatus as updateExamStatusService,
} from '../services/exam.service';

const createExam = catchAsync(async (req, res, next) => {
  const user = req.user as User;
  const { title, description, duration_minutes } = req.body as ExamCreateInput;

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

  const exams = await getAllExamsService(user.tenant_id);

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exams fetched successfully',
    data: exams,
  });
});

const getExamById = catchAsync(async (req, res, next) => {
  const user = req.user as User;

  if (!req.params.exam_id) {
    throw new BadRequestError('Exam ID is required');
  }

  const exam = await getExamByIdService(
    req.params.exam_id as string,
    user.tenant_id,
  );

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exam fetched successfully',
    data: exam,
  });
});

const deleteExam = catchAsync(async (req, res, next) => {
  const user = req.user as User;

  if (!req.params.exam_id) {
    throw new BadRequestError('Exam ID is required');
  }

  await deleteExamService(req.params.exam_id as string, user.tenant_id);

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exam deleted successfully',
  });
});

const updateExam = catchAsync(async (req, res, next) => {
  const user = req.user as User;

  if (!req.params.exam_id) {
    throw new BadRequestError('Exam ID is required');
  }

  await updateExamService(
    req.params.exam_id as string,
    req.body as ExamUpdateInput,
    user.tenant_id as string,
  );

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exam updated successfully',
  });
});

const updateExamStatus = catchAsync(async (req, res, next) => {
  const user = req.user as User;

  if (!req.params.exam_id) {
    throw new BadRequestError('Exam ID is required');
  }

  const statusType = req.url.split('/')[-1];

  if (statusType === 'publish') {
    await updateExamStatusService(
      req.params.exam_id as string,
      user.tenant_id,
      true,
    );
  } else if (statusType === 'unpublish') {
    await updateExamStatusService(
      req.params.exam_id as string,
      user.tenant_id,
      false,
    );
  }

  res.status(StatusCodes.OK).json({
    type: 'success',
    message:
      statusType === 'publish'
        ? 'Exam published successfully'
        : 'Exam unpublished successfully',
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
