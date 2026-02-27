import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync';
import { zodParse } from '../utils/zod-parse';
import { startExam as startExamService } from '../services/students.service';
import z from 'zod';
import {
  AttemptArgsObjectZodSchema,
  AttemptCreateInputObjectZodSchema,
} from '../generated/schemas';
import { getAttemptById } from '../services/attempt.service';
import { getExamById } from '../services/exam.service';
import { User } from '../generated/prisma/client';

const StartExamSchema = z.strictObject({
  examCode: z.string(),
  name: z.string(),
  email: z.email(),
});

const startExam = catchAsync(async (req, res) => {
  const { examCode, name, email } = zodParse(StartExamSchema, req.body);

  const result = await startExamService({ examCode, name, email });

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Exam started successfully',
    data: result,
  });
});

const getAttempt = catchAsync(async (req, res) => {
  const user = req.user as User;
  const { id } = zodParse(
    AttemptCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.attempt_id,
    },
  );

  console.log(user);

  const attempt = await getAttemptById(id as string);

  const exam = await getExamById(
    attempt?.exam_id as string,
    user.tenant_id,
    true,
  );

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Attempt fetched successfully',
    data: {
      attempt,
      exam,
    },
  });
});

export { startExam, getAttempt };
