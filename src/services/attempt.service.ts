import type { AttemptCreateInput } from '../generated/prisma/models';
import { AppError, handlePrismaError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { StatusEnum } from '../generated/prisma/enums';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

async function createAttempt(data: AttemptCreateInput) {
  const attempt = await prisma.attempt.create({ data });
  return attempt;
}

async function getAttemptById(id: string) {
  const attempt = await prisma.attempt.findUnique({ where: { id } });

  if (attempt === null) {
    throw new AppError({
      status: StatusCodes.NOT_FOUND,
      reason: ReasonPhrases.NOT_FOUND,
      message: `Attempt with id: ${id} does not exist`,
    });
  }

  return attempt;
}

async function incrementCorrectAnswers(attemptId: string) {
  const attempt = await getAttemptById(attemptId);
  attempt.correct_answers += 1;

  try {
    await prisma.attempt.update({
      where: { id: attemptId },
      data: { correct_answers: attempt.correct_answers },
    });
  } catch (error) {
    handlePrismaError(error, `Failed to update attempt with id: ${attemptId}`);
    throw error;
  }

  return attempt.correct_answers;
}

async function incrementWrongAnswers(attemptId: string) {
  const attempt = await getAttemptById(attemptId);
  attempt.wrong_answers += 1;

  try {
    await prisma.attempt.update({
      where: { id: attemptId },
      data: { wrong_answers: attempt.wrong_answers },
    });
  } catch (error) {
    handlePrismaError(error, `Failed to update attempt with id: ${attemptId}`);
    throw error;
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
    handlePrismaError(error, `Failed to update attempt with id: ${attemptId}`);
    throw error;
  }

  return status;
}

async function calculateAttemptScore(attemptId: string) {
  const attempt = await getAttemptById(attemptId);
  const { correct_answers = 0, wrong_answers = 0 } = attempt;
  const totalQuestionsAnswered = correct_answers + wrong_answers;

  if (totalQuestionsAnswered === 0) return 0;
  const score = Math.round((correct_answers / totalQuestionsAnswered) * 100);

  try {
    await prisma.attempt.update({ where: { id: attemptId }, data: { score } });
  } catch (error) {
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
