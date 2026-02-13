import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import type { AttemptCreateInput } from '../generated/prisma/models';
import { AppError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { StatusEnum } from '../generated/prisma/enums';

async function createAttempt(data: AttemptCreateInput) {
  const attempt = await prisma.attempt.create({ data });
  prisma.$disconnect();
  return attempt;
}

async function getAttemptById(id: string) {
  const attempt = await prisma.attempt.findUnique({ where: { id } });
  prisma.$disconnect();
  return attempt;
}

async function incrementCorrectAnswers(attemptId: string) {
  const attempt = await getAttemptById(attemptId);
  prisma.$disconnect();

  if (attempt === null) {
    throw new AppError({
      status: 400,
      code: 'not_found',
      message: 'No attempt found',
    });
  }

  attempt.correct_answers += 1;

  try {
    await prisma.attempt.update({
      where: { id: attemptId },
      data: { correct_answers: attempt.correct_answers },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new AppError({
        status: 424,
        code: 'bad_request',
        message: `Failed to update attempt with code: ${error.code}`,
      });
    }

    throw error;
  } finally {
    prisma.$disconnect();
  }

  return attempt.correct_answers;
}

async function incrementWrongAnswers(attemptId: string) {
  const attempt = await getAttemptById(attemptId);
  prisma.$disconnect();

  if (attempt === null) {
    throw new AppError({
      status: 400,
      code: 'not_found',
      message: 'No attempt found',
    });
  }

  attempt.wrong_answers += 1;

  try {
    await prisma.attempt.update({
      where: { id: attemptId },
      data: { wrong_answers: attempt.wrong_answers },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new AppError({
        status: 424,
        code: 'bad_request',
        message: `Failed to update attempt with code: ${error.code}`,
      });
    }

    throw error;
  } finally {
    prisma.$disconnect();
  }

  return attempt.wrong_answers;
}

async function updateAttemptStatus(attemptId: string, status: StatusEnum) {
  const now = new Date();

  try {
    await prisma.attempt.update({
      where: { id: attemptId },
      data: {
        status,
        ...(status === StatusEnum.SUBMITTED ? { submitted_at: now } : {}),
      },
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new AppError({
        status: 424,
        code: 'bad_request',
        message: `Failed to update attempt with code: ${error.code}`,
      });
    }

    throw error;
  } finally {
    prisma.$disconnect();
  }

  return status;
}

async function calculateAttemptScore(attemptId: string) {
  const attempt = await getAttemptById(attemptId);
  prisma.$disconnect();

  if (attempt === null) {
    throw new AppError({
      status: 400,
      code: 'not_found',
      message: 'No attempt found',
    });
  }

  const { correct_answers = 0, wrong_answers = 0 } = attempt;
  const totalQuestionsAnswered = correct_answers + wrong_answers;

  if (totalQuestionsAnswered === 0) return 0;
  const score = Math.round((correct_answers / totalQuestionsAnswered) * 100);

  try {
    await prisma.attempt.update({ where: { id: attemptId }, data: { score } });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      throw new AppError({
        status: 424,
        code: 'bad_request',
        message: `Failed to update attempt with code: ${error.code}`,
      });
    }

    throw error;
  } finally {
    prisma.$disconnect();
  }

  return score;
}

export {
  createAttempt,
  getAttemptById,
  incrementCorrectAnswers,
  incrementWrongAnswers,
  updateAttemptStatus,
  calculateAttemptScore,
};
