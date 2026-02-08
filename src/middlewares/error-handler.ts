import { Request, Response, NextFunction } from 'express';
import config from '../config';
import { AppError, getErrorMessage } from '../utils/error';

export default function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
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
    res.status(err.status).json({ message: err.message });
    return;
  }

  res
    .status(500)
    .json({ message: getErrorMessage(err) || 'Internal server error' });
}
