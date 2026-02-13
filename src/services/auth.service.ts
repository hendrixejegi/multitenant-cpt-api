import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import type {
  TenantCreateInput,
  UserCreateInput,
} from '../generated/prisma/models';
import { AppError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { createTenant } from './tenant.service';
import { hash } from '../utils/bcrypt';

type NewUserData = Omit<UserCreateInput, 'tenant' | 'password_hash'> & {
  password: string;
};

async function createUser(userData: NewUserData, tenantId: string) {
  const existingUser = await prisma.user.findFirst({
    where: { email: userData.email },
  });

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
  userData: NewUserData,
) {
  const tenant = await createTenant(tenantData);
  const user = await createUser({ ...userData, role: 'ADMIN' }, tenant.id);
  return { tenant, user };
}

export { createOrganization, createUser, getUserById };
