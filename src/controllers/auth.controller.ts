import type { Request, Response } from 'express';
import type { ApiResponse } from '../types/api';
import z from 'zod';
import { zodParse } from '../utils/zod-parse';
import { createTenant } from '../services/tenant.service';
import {
  createUser,
  hash,
  getUserByEmail,
  compare,
  issueJwt,
} from '../services/auth.service';
import { RoleEnum } from '../generated/prisma/enums';
import { BadRequestError } from '../utils/error';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { User } from '../generated/prisma/client';

const RegisterSchema = z.strictObject({
  name: z.string(),
  password: z.string(),
  organization_name: z.string(),
  organization_slug: z.string(),
  email: z.email(),
});

const LoginSchema = z.strictObject({
  email: z.email(),
  password: z.string(),
});

export async function register(req: Request, res: Response<ApiResponse>) {
  const allowed = zodParse(RegisterSchema, req.body);

  const {
    organization_name: name,
    organization_slug: slug,
    password,
    ...userData
  } = allowed;

  const tenant = await createTenant({ name, slug });

  const hashedPassword = await hash(password);

  const { password_hash, ...user } = await createUser({
    ...userData,
    password_hash: hashedPassword,
    role: RoleEnum.ADMIN,
    is_guest: false,
    tenant: { connect: { id: tenant.id } },
  });

  res.status(StatusCodes.CREATED).json({
    type: 'success',
    message: 'Registration successful',
    data: { tenant, user },
  });
}

export async function login(req: Request, res: Response<ApiResponse>) {
  const allowed = zodParse(LoginSchema, req.body);

  const user = await getUserByEmail(allowed.email);

  if (user === null) {
    throw new BadRequestError('Invalid email or password');
  }

  const { password_hash } = user;
  const isMatch = await compare(allowed.password, password_hash!);

  if (!isMatch) {
    throw new BadRequestError('Invalid email or password');
  }

  const jwt = issueJwt(user);

  res
    .status(StatusCodes.OK)
    .json({ type: 'success', message: ReasonPhrases.OK, data: jwt });
}

export async function getUserInfo(req: Request, res: Response<ApiResponse>) {
  const { password_hash, ...user } = req.user as User;
  res
    .status(StatusCodes.OK)
    .json({ type: 'success', message: ReasonPhrases.OK, data: user });
}
