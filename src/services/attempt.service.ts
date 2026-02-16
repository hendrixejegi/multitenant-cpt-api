import type { AttemptCreateInput } from '../generated/prisma/models';
import { handlePrismaError, NotFoundError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { StatusEnum } from '../generated/prisma/enums';
import { Prisma } from '../generated/prisma/client';

function isPrismaRecordNotFound(error: unknown): boolean {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === 'P2025'
  );
}

async function createAttempt(data: AttemptCreateInput) {
  return prisma.attempt.create({ data });
}

async function getAttemptById(id: string) {
  return prisma.attempt.findUnique({ where: { id } });
}

async function incrementCorrectAnswers(attemptId: string) {
  try {
    const updatedAttempt = await prisma.attempt.update({
      where: { id: attemptId },
      data: { correct_answers: { increment: 1 } },
      select: { correct_answers: true },
    });

    return updatedAttempt.correct_answers;
  } catch (error) {
    if (isPrismaRecordNotFound(error)) {
      throw new NotFoundError(`Attempt with id: ${attemptId} does not exist`);
    }

    handlePrismaError(error, `Failed to update attempt with id: ${attemptId}`);
    throw error;
  }
}

async function incrementWrongAnswers(attemptId: string) {
  try {
    const updatedAttempt = await prisma.attempt.update({
      where: { id: attemptId },
      data: { wrong_answers: { increment: 1 } },
      select: { wrong_answers: true },
    });

    return updatedAttempt.wrong_answers;
  } catch (error) {
    if (isPrismaRecordNotFound(error)) {
      throw new NotFoundError(`Attempt with id: ${attemptId} does not exist`);
    }

    handlePrismaError(error, `Failed to update attempt with id: ${attemptId}`);
    throw error;
  }
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
    if (isPrismaRecordNotFound(error)) {
      throw new NotFoundError(`Attempt with id: ${attemptId} does not exist`);
    }

    handlePrismaError(error, `Failed to update attempt with id: ${attemptId}`);
    throw error;
  }

  return status;
}

async function calculateAttemptScore(attemptId: string) {
  const attempt = await getAttemptById(attemptId);

  if (attempt === null) {
    throw new NotFoundError(`Attempt with id: ${attemptId} does not exist`);
  }

  const { correct_answers = 0, wrong_answers = 0 } = attempt;
  const totalQuestionsAnswered = correct_answers + wrong_answers;

  if (totalQuestionsAnswered === 0) return 0;
  const score = Math.round((correct_answers / totalQuestionsAnswered) * 100);

  try {
    await prisma.attempt.update({ where: { id: attemptId }, data: { score } });
  } catch (error) {
    if (isPrismaRecordNotFound(error)) {
      throw new NotFoundError(`Attempt with id: ${attemptId} does not exist`);
    }

    handlePrismaError(error, `Failed to update attempt with id: ${attemptId}`);
    throw error;
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
