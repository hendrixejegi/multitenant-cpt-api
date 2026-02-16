import type {
  ExamCreateInput,
  ExamUpdateInput,
} from '../generated/prisma/models';
import { AppError, handlePrismaError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { createExamCode, getTenantId } from '../utils/helpers';
import { ExamAggregateResultSchema } from '../generated/schemas';

const createExam = async (data: ExamCreateInput, tenantId: string) => {
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
        ...(data as ExamCreateInput),
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

const deleteExam = async (examId: string) => {
  try {
    await prisma.exam.delete({
      where: {
        id: examId,
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
    const tenant_id = getTenantId();
    if (tenantId !== tenant_id) {
      throw new AppError({
        status: StatusCodes.UNAUTHORIZED,
        reason: ReasonPhrases.UNAUTHORIZED,
        message: 'Unauthorized',
      });
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

export { createExam, getAllExams, deleteExam, updateExam };
