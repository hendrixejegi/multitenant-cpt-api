import type { Request, Response, NextFunction } from 'express';
import config from '../config/config';
import { AppError, errorToPlain, getErrorMessage } from '../utils/error';

export default function errorHandler(
  err: any,
  req: Request,
  res: Response<ApiResponse>,
  next: NextFunction,
) {
  if (res.headersSent) {
    next();
    return;
  }

  if (config.nodeEnv === 'development') {
    console.log(err);
  }

  if (err instanceof AppError) {
    const { message, data } = err;
    res.status(err.status).json({ type: 'error', message, data });
    return;
  }

  const errObj = err instanceof Error ? errorToPlain(err) : { ...err };
  const { message, ...rest } = errObj;

  res.status(500).json({
    type: 'error',
    message: message || getErrorMessage(err) || 'Internal server error',
    data: rest,
  });
}
