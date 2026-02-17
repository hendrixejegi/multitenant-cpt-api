import type {
  ExamCreateInput,
  ExamUpdateInput,
} from '../generated/prisma/models.js';
import {
  AppError,
  BadRequestError,
  handlePrismaError,
  NotFoundError,
  UnauthorizedError,
} from '../utils/error';
import { prisma } from '../utils/prisma';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { createExamCode, getTenantId } from '../utils/helpers';

const createExam = async (
  data: Pick<ExamCreateInput, 'title' | 'description' | 'duration_minutes'>,
  tenantId: string,
) => {
  try {
    if (!data) {
      throw new AppError({
        status: StatusCodes.BAD_REQUEST,
        reason: ReasonPhrases.BAD_REQUEST,
        message: 'Invalid exam data or tenant ID',
      });
    }
    const exam = await prisma.exam.create({
      data: {
        ...data,
        code: createExamCode(),
        is_published: false,
        tenant: {
          connect: {
            id: tenantId,
          },
        },
      },
    });
    return exam;
  } catch (error) {
    handlePrismaError(error, 'Failed to create exam');
    throw error;
  }
};

const getAllExams = async (tenantId: string) => {
  try {
    if (!tenantId) {
      throw new AppError({
        status: StatusCodes.BAD_REQUEST,
        reason: ReasonPhrases.BAD_REQUEST,
        message: 'Tenant ID is required',
      });
    }

    const allExams = await prisma.exam.findMany({
      where: {
        tenant_id: tenantId,
      },
    });
    return allExams;
  } catch (error) {
    handlePrismaError(error, 'Failed to fetch exams');
    throw error;
  }
};

const getExamById = async (examId: string, tenantId: string) => {
  if (!tenantId) {
    throw new BadRequestError('Tenant ID is required');
  }

  const exam = await prisma.exam.findUnique({
    where: {
      id: examId,
      tenant_id: tenantId,
    },
  });

  return exam;
};

const deleteExam = async (examId: string, tenantId: string) => {
  try {
    const exam = await prisma.exam.findUnique({
      where: { id: examId },
      select: { tenant_id: true },
    });

    if (!exam) {
      throw new NotFoundError('Exam not found');
    }

    if (exam.tenant_id !== tenantId) {
      throw new UnauthorizedError('You do not have access to this exam');
    }

    await prisma.exam.delete({
      where: {
        id: examId,
        tenant_id: tenantId,
      },
    });
  } catch (error) {
    handlePrismaError(error, 'Failed to delete exam');
    throw error;
  }
};

const updateExam = async (
  examId: string,
  data: ExamUpdateInput,
  tenantId: string,
) => {
  try {
    const exam = await prisma.exam.findUnique({
      where: { id: examId },
      select: { tenant_id: true },
    });

    if (!exam) {
      throw new NotFoundError('Exam not found');
    }

    if (exam.tenant_id !== tenantId) {
      throw new UnauthorizedError('You do not have access to this exam');
    }

    await prisma.exam.update({
      where: {
        id: examId,
        tenant_id: tenantId,
      },
      data: data as ExamUpdateInput,
    });
    return;
  } catch (error) {
    handlePrismaError(error, 'Failed to update exam');
    throw error;
  }
};

const getExamByCode = async (code: string, userId: string, examId: string) => {
  try {
    if (!code) {
      throw new AppError({
        status: StatusCodes.BAD_REQUEST,
        reason: ReasonPhrases.BAD_REQUEST,
        message: 'Exam code is required',
      });
    }

    const exam = await prisma.exam.findFirst({
      where: {
        id: examId,
        code,
      },
      include: {
        questions: {
          omit: {
            correct_answer: true,
          },
        },
      },
    });

    return exam;
  } catch (error) {
    handlePrismaError(error, 'Failed to fetch exam by code');
    throw error;
  }
};

const updateExamStatus = async (
  examId: string,
  tenantId: string,
  status: boolean,
) => {
  const exam = await prisma.exam.findUnique({
    where: { id: examId },
    select: { tenant_id: true },
  });

  if (!exam) {
    throw new NotFoundError('Exam not found');
  }

  if (exam.tenant_id !== tenantId) {
    throw new UnauthorizedError('You do not have access to this exam');
  }

  await prisma.exam.update({
    where: {
      id: examId,
      tenant_id: tenantId,
    },
    data: {
      is_published: status,
    },
  });
  return;
};

export {
  createExam,
  getAllExams,
  getExamById,
  deleteExam,
  updateExam,
  updateExamStatus,
  getExamByCode,
};
