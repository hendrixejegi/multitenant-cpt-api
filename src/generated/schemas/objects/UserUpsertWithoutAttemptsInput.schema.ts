import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserUpdateWithoutAttemptsInputObjectSchema as UserUpdateWithoutAttemptsInputObjectSchema } from './UserUpdateWithoutAttemptsInput.schema';
import { UserUncheckedUpdateWithoutAttemptsInputObjectSchema as UserUncheckedUpdateWithoutAttemptsInputObjectSchema } from './UserUncheckedUpdateWithoutAttemptsInput.schema';
import { UserCreateWithoutAttemptsInputObjectSchema as UserCreateWithoutAttemptsInputObjectSchema } from './UserCreateWithoutAttemptsInput.schema';
import { UserUncheckedCreateWithoutAttemptsInputObjectSchema as UserUncheckedCreateWithoutAttemptsInputObjectSchema } from './UserUncheckedCreateWithoutAttemptsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAttemptsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAttemptsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAttemptsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAttemptsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutAttemptsInput>;
export const UserUpsertWithoutAttemptsInputObjectZodSchema = makeSchema();
