import { prisma } from '../utils/prisma';
import { RoleEnum } from '../generated/prisma/enums';
import { getExamByCode } from './exam.service';
import { createUser, issueJwt } from './auth.service';
import { BadRequestError, NotFoundError } from '../utils/error';
import { createAttempt, getAttemptById } from './attempt.service';

interface IStudentService {
  examCode: string;
  name: string;
  email: string;
}

const startExam = async (data: IStudentService) => {
  const { examCode, name, email } = data;

  if (!examCode || !name || !email) {
    throw new BadRequestError(
      'Missing required fields (examCode, name, email)',
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

  const token = issueJwt(user, exam.duration_minutes);

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

const getAttempt = async (attemptId: string) => {
  if (attemptId) {
    throw new BadRequestError('Attempt ID is required');
  }

  const attempt = await getAttemptById(attemptId);

  return attempt;
};

export { startExam, getAttempt };
