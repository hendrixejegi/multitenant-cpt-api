import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync';
import { zodParse } from '../utils/zod-parse';
import {
  startExam as startExamService,
  getAttempt as getAttemptService,
  checkAnswer as checkAnswerService,
  submit as submitService,
} from '../services/students.service';
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

const getStudentAttempt = catchAsync(async (req, res) => {
  const user = req.user as User;
  const { id } = zodParse(
    AttemptCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.attempt_id,
    },
  );

  console.log(user || 'No user found');

  const attempt = await getAttemptService(id as string);
  console.log(attempt || 'No attempt found');

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

const checkAnswer = catchAsync(async (req, res, next) => {
  const { answer, questionId } = zodParse(
    z.strictObject({
      answer: z.string(),
      questionId: z.string(),
    }),
    req.body,
  );

  const attempt = await getAttemptById(req.params.attemptId as string);

  if (!attempt) {
    throw new Error('Attempt not found');
  }

  await checkAnswerService(attempt.id, answer, questionId);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Answer checked successfully',
  });
});

const submitAnswers = catchAsync(async (req, res) => {
  const result = await submitService(req.params.attemptId as string);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Answer submitted successfully',
    data: result,
  });
});

export { startExam, getStudentAttempt, checkAnswer, submitAnswers };
