import { Request, Response } from 'express';
import { zodParse } from '../utils/zod-parse';
import { AttemptCreateInputObjectZodSchema } from '../generated/schemas';
import { getAttemptById } from '../services/attempt.service';
import { StatusCodes } from 'http-status-codes';
import type { ApiResponse } from '../types/api';
import { NotFoundError } from '../utils/error';

export async function getAttemptDetails(
  req: Request<{ attemptId: string }>,
  res: Response<ApiResponse>,
) {
  const allowed = zodParse(
    AttemptCreateInputObjectZodSchema.pick({ id: true }),
    {
      id: req.params.attemptId,
    },
  );

  const attempt = await getAttemptById(allowed.id ?? '');

  if (attempt === null) throw new NotFoundError('No attempt found');

  res.status(StatusCodes.OK).json({ type: 'success', data: attempt });
}
