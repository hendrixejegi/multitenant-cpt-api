import { StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync';
import { zodParse } from '../utils/zod-parse';
import { startExam as startExamService } from '../services/students.service';
import z from 'zod';

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

export { startExam };
