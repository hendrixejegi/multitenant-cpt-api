import {
  QuestionCreateInput,
  QuestionUpdateInput,
} from '../generated/prisma/models';
import { AppError, BadRequestError, handlePrismaError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { RoleEnum } from '../generated/prisma/enums';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const createQuestion = async (
  examId: string,
  data: Pick<QuestionCreateInput, 'text' | 'options' | 'correct_answer'>,
) => {
  try {
    if (!data) {
      throw new AppError({
        status: StatusCodes.BAD_REQUEST,
        reason: ReasonPhrases.BAD_REQUEST,
        message: 'Question data is required',
      });
    }

    const question = await prisma.question.create({
      data: {
        ...data,
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

const getExamQuestionsandOptions = async (examId: string) => {
  try {
    if (!examId) {
      throw new AppError({
        status: StatusCodes.BAD_REQUEST,
        reason: ReasonPhrases.BAD_REQUEST,
        message: 'Exam ID and Tenant ID are required',
      });
    }

    const examQuestionsandOptions = await prisma.exam.findUnique({
      where: {
        id: examId,
      },
      include: {
        questions: true,
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

const deleteQuestion = async (examId: string, questionId: string) => {
  if (!examId || !questionId) {
    throw new BadRequestError('Exam ID and Question ID are required');
  }

  await prisma.question.delete({
    where: {
      id: questionId,
      exam_id: examId,
    },
  });

  return;
};

const updateQuestion = async (
  examId: string,
  questionId: string,
  data: Partial<
    Pick<QuestionUpdateInput, 'text' | 'options' | 'correct_answer'>
  >,
) => {
  if (!examId || !questionId) {
    throw new BadRequestError('Exam ID and Question ID are required');
  }

  const updatedQuestion = await prisma.question.update({
    where: {
      id: questionId,
      exam_id: examId,
    },
    data: Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined),
    ),
  });

  return updatedQuestion;
};

export {
  createQuestion,
  getExamQuestionsandOptions,
  deleteQuestion,
  updateQuestion,
};
