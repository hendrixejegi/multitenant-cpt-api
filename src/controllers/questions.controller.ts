import {
  AppError,
  UnauthorizedError,
  BadRequestError,
  NotFoundError,
} from '../utils/error';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync';
import {
  createQuestion as createQuestionService,
  getExamQuestionsandOptions as getExamQuestionsandOptionsService,
  deleteQuestion as deleteQuestionService,
  updateQuestion as updateQuestionService,
} from '../services/questions.service';
import { zodParse } from '../utils/zod-parse';
import {
  QuestionCreateInputObjectZodSchema,
  ExamCreateInputObjectZodSchema,
} from '../generated/schemas';

const createQuestion = catchAsync(async (req, res, next) => {
  const { id: exam_id } = zodParse(
    QuestionCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.exam_id,
    },
  );

  const { text, options, correct_answer } = zodParse(
    QuestionCreateInputObjectZodSchema.pick({
      text: true,
      options: true,
      correct_answer: true,
    }),
    req.body,
  );

  await createQuestionService(exam_id as string, {
    text,
    options: options as string[],
    correct_answer,
  });

  res.status(StatusCodes.CREATED).json({
    type: 'success',
    message: 'Question created successfully',
  });
});

const getExamQuestionsandOptions = catchAsync(async (req, res, next) => {
  const { id: exam_id } = zodParse(
    QuestionCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.exam_id,
    },
  );

  const examQuestionsandOptions = await getExamQuestionsandOptionsService(
    exam_id as string,
  );

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Exam questions and options fetched successfully',
    data: examQuestionsandOptions,
  });
});

const deleteQuestion = catchAsync(async (req, res, next) => {
  const { id: exam_id } = zodParse(
    ExamCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.exam_id,
    },
  );

  const { id: question_id } = zodParse(
    QuestionCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.question_id,
    },
  );

  await deleteQuestionService(exam_id as string, question_id as string);

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Question deleted successfully',
  });
});

const updateQuestion = catchAsync(async (req, res, next) => {
  const { id: exam_id } = zodParse(
    ExamCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.exam_id,
    },
  );

  const { id: question_id } = zodParse(
    QuestionCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.question_id,
    },
  );

  const { text, options, correct_answer } = zodParse(
    QuestionCreateInputObjectZodSchema.pick({
      text: true,
      options: true,
      correct_answer: true,
    }),
    req.body,
  );

  await updateQuestionService(exam_id as string, question_id as string, {
    text,
    options: options as string[],
    correct_answer,
  });

  res.status(StatusCodes.OK).json({
    type: 'success',
    message: 'Question updated successfully',
  });
});

export {
  createQuestion,
  getExamQuestionsandOptions,
  deleteQuestion,
  updateQuestion,
};
