import { UnauthorizedError } from '../utils/error';
import type { NextFunction, Request, Response } from 'express';

function requireRole(role: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new UnauthorizedError('Authentication required');
    }

    const currentRole = String(
      (req.user as { role?: string | null }).role ?? '',
    ).toLowerCase();

    if (currentRole !== role.toLowerCase()) {
      throw new UnauthorizedError('Insufficient permissions');
    }

    next();
  };
}

export { requireRole };
