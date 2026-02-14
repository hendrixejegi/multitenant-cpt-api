import type { UserCreateInput } from '../generated/prisma/models';
import { BadRequestError } from '../utils/error';
import { prisma } from '../utils/prisma';
import bcrypt from 'bcrypt';
import jwt, {
  type JwtPayload,
  type Secret,
  type SignOptions,
} from 'jsonwebtoken';
import type { User } from '../generated/prisma/client';
import ms, { type StringValue } from 'ms';

async function hash(arg: string) {
  const result = await bcrypt.hash(arg, 10);
  return result;
}

async function compare(arg: string, enc: string) {
  const result = await bcrypt.compare(arg, enc);
  return result;
}

function issueJwt(user: User, duration?: number) {
  const { id } = user;
  const expiresIn = duration ? ms(duration) : '1d';

  const payload: JwtPayload = {
    sub: id,
    iat: Math.floor(Date.now() / 1000),
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET as Secret,
    {
      expiresIn,
      algorithm: 'HS256',
    } as SignOptions,
  );

  return {
    token: 'Bearer ' + token,
    expires: ms(expiresIn as StringValue),
  };
}

async function createUser(data: UserCreateInput) {
  const existingUser = await prisma.user.findFirst({
    where: { email: data.email },
  });
  prisma.$disconnect();

  if (!existingUser === null) {
    throw new BadRequestError('User with email already exists');
  }

  const newUser = await prisma.user.create({ data });
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

export { createUser, getUserById, getUserByEmail, hash, compare, issueJwt };
