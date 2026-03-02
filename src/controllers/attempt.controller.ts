import { Request, Response } from 'express';
import { zodParse } from '../utils/zod-parse';
import { AttemptCreateInputObjectZodSchema } from '../generated/schemas';
import { getAttemptById } from '../services/attempt.service';
import { StatusCodes } from 'http-status-codes';
import type { ApiResponse } from '../types/api';

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

  res.status(StatusCodes.OK).json({ type: 'success', data: attempt });
}
