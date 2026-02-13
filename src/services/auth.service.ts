import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import type {
  TenantCreateInput,
  UserCreateInput,
} from '../generated/prisma/models';
import { AppError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { createTenant } from './tenant.service';
import bcrypt from 'bcrypt';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import type { RoleEnum, User } from '../generated/prisma/client';
import { NextFunction, Request, Response } from 'express';

type NewUserData = Omit<UserCreateInput, 'tenant' | 'password_hash'> & {
  password: string;
};

async function hash(arg: string) {
  const result = await bcrypt.hash(arg, 10);
  return result;
}

async function compare(arg: string, enc: string) {
  const result = await bcrypt.compare(arg, enc);
  return result;
}

async function issueJwt(user: User) {
  const { id, role, is_guest, tenant_id } = user;
  const expiresIn = '1d';

  const payload: JwtPayload = {
    sub: id,
    iat: Date.now(),
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn,
    algorithm: 'HS256',
  });

  return {
    token: 'Bearer ' + token,
    expires: expiresIn,
  };
}

async function requireRole(role: RoleEnum) {
  return (req: Request, res: Response, next: NextFunction) => {
    if ((req.user as User).role !== role) {
      throw new AppError({
        status: StatusCodes.UNAUTHORIZED,
        reason: ReasonPhrases.UNAUTHORIZED,
        message: 'Unauthorized',
      });
    }
  };
}

async function createUser(userData: NewUserData, tenantId: string) {
  const existingUser = await prisma.user.findFirst({
    where: { email: userData.email },
  });

  prisma.$disconnect();

  if (!existingUser === null) {
    throw new AppError({
      status: StatusCodes.BAD_REQUEST,
      reason: ReasonPhrases.BAD_REQUEST,
      message: 'User with email already exists',
    });
  }

  const passwordHash = await hash(userData.password);
  const newUser = await prisma.user.create({
    data: {
      ...userData,
      password_hash: passwordHash,
      tenant: { connect: { id: tenantId } },
    },
  });

  prisma.$disconnect();
  return newUser;
}

async function getUserById(id: string) {
  const user = await prisma.user.findUnique({ where: { id } });
  prisma.$disconnect();
  return user;
}

async function getUserByEmail(email: string) {
  const user = await prisma.user.findFirst({ where: { email } });
  prisma.$disconnect();
  return user;
}

async function createOrganization(
  tenantData: TenantCreateInput,
  userData: NewUserData,
) {
  const tenant = await createTenant(tenantData);
  const user = await createUser({ ...userData, role: 'ADMIN' }, tenant.id);
  return { tenant, user };
}

export {
  createOrganization,
  createUser,
  getUserById,
  getUserByEmail,
  compare,
  issueJwt,
  requireRole,
};
