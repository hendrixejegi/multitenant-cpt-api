import { UnauthorizedError } from '../utils/error';
import type { RoleEnum, User } from '../generated/prisma/client';
import type { NextFunction, Request, Response } from 'express';

function requireRole(role: RoleEnum) {
  return (req: Request, res: Response, next: NextFunction) => {
    if ((req.user as User).role !== role) {
      throw new UnauthorizedError();
    }
    next();
  };
}

export { requireRole };
