import { Request, Response } from 'express';
import { User } from '../generated/prisma/client';
import { getTenantById } from '../services/tenant.service';
import { StatusCodes } from 'http-status-codes';
import type { ApiResponse } from '../types/api';

export async function getTenantInfo(req: Request, res: Response<ApiResponse>) {
  const user = req.user as User;
  const tenant = await getTenantById(user.tenant_id);

  res.status(StatusCodes.OK).json({ type: 'success', data: tenant });
}
