import type { AttemptCreateInput } from '../generated/prisma/models';
import { handlePrismaError, NotFoundError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { StatusEnum } from '../generated/prisma/enums';
import { getExamById } from './exam.service';
import { getExamQuestionsandOptions } from './questions.service';

async function createAttempt(data: AttemptCreateInput) {
  const attempt = await prisma.attempt.create({ data });
  return attempt;
}

async function getAttemptById(id: string) {
  const attempt = await prisma.attempt.findUnique({
    where: { id },
  });
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

  const { correct_answers = 0, exam_id } = attempt;

  const totalQuestions = (await getExamQuestionsandOptions(exam_id)).questions
    .length;

  if (totalQuestions === 0 || correct_answers === 0) return 0;
  const score = Math.round((correct_answers / totalQuestions) * 100);

  try {
    await prisma.attempt.update({ where: { id: attemptId }, data: { score } });
  } catch (error) {
    handlePrismaError(error, `Failed to update attempt with id: ${attemptId}`);
    throw error;
  }

  return score;
}

async function getAttemptsByExamId(id: string) {
  try {
    const attempts = await prisma.attempt.findMany({ where: { exam_id: id } });
    return attempts;
  } catch (error) {
    handlePrismaError(error, 'Failed to fetch attempts with exam Id');
    throw error;
  }
}

export {
  createAttempt,
  getAttemptById,
  incrementCorrectAnswers,
  incrementWrongAnswers,
  updateAttemptStatus,
  calculateAttemptScore,
  getAttemptsByExamId,
};
