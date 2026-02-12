import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import type {
  TenantCreateInput,
  UserCreateInput,
} from '../generated/prisma/models';
import { AppError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { createTenant } from './tenant.service';
import bcrypt from 'bcrypt';

async function createUser(data: UserCreateInput) {
  const existingUser = await prisma.user.findFirst({
    where: { email: data.email },
  });

  if (!existingUser === null) {
    throw new AppError({
      status: StatusCodes.BAD_REQUEST,
      reason: ReasonPhrases.BAD_REQUEST,
      message: 'User with email already exists',
    });
  }

  const newUser = await prisma.user.create({ data });
  return newUser;
}

async function getUserById(id: string) {
  const user = await prisma.user.findUnique({ where: { id } });

  if (user === null) {
    throw new AppError({
      status: StatusCodes.NOT_FOUND,
      reason: ReasonPhrases.NOT_FOUND,
      message: `User with id: ${id} doesn't exist`,
    });
  }

  return user;
}

async function createOrganization(
  tenantData: TenantCreateInput,
  userData: Omit<UserCreateInput, 'tenant' | 'password_hash'> & {
    password: string;
  },
) {
  const tenant = await createTenant(tenantData);

  // Create user
  const passwordHash = await bcrypt.hash(userData.password, 10);
  const user = await createUser({
    ...userData,
    role: 'ADMIN',
    password_hash: passwordHash,
    tenant: { connect: { id: tenant.id } },
  });
}

export { createOrganization };
