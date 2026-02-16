import { AppError } from '../utils/error';
import { RoleEnum } from '../generated/prisma/enums';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import catchAsync from '../utils/catchAsync';

export const createExam = catchAsync(async (req, res, next) => {
  console.log(req.body);
});
