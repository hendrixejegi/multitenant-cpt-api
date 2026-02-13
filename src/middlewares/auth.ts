import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { AppError } from '../utils/error';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    tenantId: string;
    role: string;
  };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new AppError({
        status: 401,
        message: 'No token provided',
        code: 'unauthorized',
      });
    }

    const decoded = jwt.verify(token, config.jwtSecret) as {
      id: string;
      email: string;
      tenantId: string;
      role: string;
    };

    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new AppError({
        status: 401,
        message: 'Invalid token',
        code: 'invalid_token',
      });
    }
    next(error);
  }
};
