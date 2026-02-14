import type { AttemptCreateInput } from '../generated/prisma/models';
import { handlePrismaError, NotFoundError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { StatusEnum } from '../generated/prisma/enums';

async function createAttempt(data: AttemptCreateInput) {
  const attempt = await prisma.attempt.create({ data });
  return attempt;
}

async function getAttemptById(id: string) {
  const attempt = await prisma.attempt.findUnique({ where: { id } });
  return attempt;
}

async function incrementCorrectAnswers(attemptId: string) {
  const attempt = await getAttemptById(attemptId);

  if (attempt === null) {
    throw new NotFoundError(`Attempt with id: ${attemptId} does not exist`);
  }

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

  if (attempt === null) {
    throw new NotFoundError(`Attempt with id: ${attemptId} does not exist`);
  }

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
