import { QuestionCreateInput } from '../generated/prisma/models';
import { AppError, handlePrismaError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { RoleEnum } from '../generated/prisma/enums';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const createQuestion = async (examId: string, data: QuestionCreateInput) => {
  try {
    if (!data) {
      throw new AppError({
        status: StatusCodes.BAD_REQUEST,
        reason: ReasonPhrases.BAD_REQUEST,
        message: 'Invalid exam data or tenant ID',
      });
    }
    const question = await prisma.question.create({
      data: {
        ...(data as QuestionCreateInput),
        exam: {
          connect: {
            id: examId,
          },
        },
      },
    });
    return question;
  } catch (error) {
    handlePrismaError(error, 'Failed to create exam');
    throw error;
  }
};

const getExamQuestionsandOptions = async (
  examId: string,
  userRole?: string,
) => {
  try {
    if (!examId) {
      throw new AppError({
        status: StatusCodes.BAD_REQUEST,
        reason: ReasonPhrases.BAD_REQUEST,
        message: 'Exam ID and Tenant ID are required',
      });
    }

    const isStudent = userRole === RoleEnum.STUDENT;

    const examQuestionsandOptions = await prisma.question.findUnique({
      omit: {
        correct_answer: true,
      },
      where: {
        id: examId,
      },
    });

    if (!examQuestionsandOptions) {
      throw new AppError({
        status: StatusCodes.NOT_FOUND,
        reason: ReasonPhrases.NOT_FOUND,
        message: 'Exam not found',
      });
    }

    return examQuestionsandOptions;
  } catch (error) {
    handlePrismaError(error, 'Failed to fetch exam questions and options');
    throw error;
  }
};

export { createQuestion, getExamQuestionsandOptions };
