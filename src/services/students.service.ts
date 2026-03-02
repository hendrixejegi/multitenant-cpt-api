import { prisma } from '../utils/prisma';
import { RoleEnum } from '../generated/prisma/enums';
import { getExamByCode, getExamById } from './exam.service';
import { createUser, issueJwt } from './auth.service';
import { BadRequestError, NotFoundError } from '../utils/error';
import {
  calculateAttemptScore,
  createAttempt,
  getAttemptById,
  incrementCorrectAnswers,
  incrementWrongAnswers,
} from './attempt.service';
import { getQuestionById } from './questions.service';

interface IStudentService {
  examCode: string;
  name: string;
  email: string;
}

const startExam = async (data: IStudentService) => {
  const { examCode, name, email } = data;

  if (!examCode || !name || !email) {
    throw new BadRequestError(
      'Missing required fields Exam Code, Name or Email',
    );
  }

  const exam = await getExamByCode(examCode);

  if (!exam) {
    throw new NotFoundError('Exam not found');
  }

  const user = await createUser({
    name,
    email,
    role: RoleEnum.STUDENT,
    is_guest: true,
    tenant: {
      connect: {
        id: exam.tenant_id,
      },
    },
  });

  const token = await issueJwt(user, exam.duration_minutes);

  const attempt = await createAttempt({
    exam: {
      connect: {
        id: exam.id,
      },
    },
    user: {
      connect: {
        id: user.id,
      },
    },
  });

  return { token, user, exam, attempt };
};

const checkAnswer = async (
  attemptId: string,
  answer: string,
  questionId: string,
) => {
  if (!attemptId || !answer || !questionId) {
    throw new BadRequestError(
      'Missing required fields Attempt ID, Answer or Question ID',
    );
  }

  const attempt = await getAttemptById(attemptId);

  if (!attempt) {
    throw new NotFoundError('Attempt not found');
  }

  const question = await getQuestionById(questionId);

  if (!question) {
    throw new NotFoundError('Question not found');
  }

  if (question.correct_answer === answer) {
    await incrementCorrectAnswers(attempt.id);
  } else {
    await incrementWrongAnswers(attempt.id);
  }
};

const getAttempt = async (attemptId: string) => {
  if (!attemptId) {
    throw new BadRequestError('Attempt ID is required');
  }

  const attempt = await getAttemptById(attemptId);

  return attempt;
};

const submit = async (
  attemptId: string,
  questionId: string,
  examId: string,
  answer: string,
) => {
  if (!attemptId) {
    throw new BadRequestError('Attempt ID is required');
  }

  const attempt = await prisma.attempt.findUnique({
    where: { id: attemptId },
    include: { exam: true },
  });

  if (!attempt) {
    throw new NotFoundError('Attempt not found');
  }

  if (!questionId) {
    throw new NotFoundError('Question not found');
  }

  const question = await getQuestionById(questionId);

  if (!question) {
    throw new NotFoundError('Question not found');
  }

  if (question.correct_answer === answer) {
    await incrementCorrectAnswers(attempt.id);
  } else {
    await incrementWrongAnswers(attempt.id);
  }

  const exam = await getExamById(examId, attempt.exam.tenant_id, true);

  if (!exam) {
    throw new NotFoundError('Question not found');
  }

  const score = await calculateAttemptScore(
    attempt.id,
    (exam as any)?.questions?.length || 0,
  );

  return {
    score,
    attempt,
  };
};

export { startExam, getAttempt, checkAnswer, submit };
