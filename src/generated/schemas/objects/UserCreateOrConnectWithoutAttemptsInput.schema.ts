import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAttemptsInputObjectSchema as UserCreateWithoutAttemptsInputObjectSchema } from './UserCreateWithoutAttemptsInput.schema';
import { UserUncheckedCreateWithoutAttemptsInputObjectSchema as UserUncheckedCreateWithoutAttemptsInputObjectSchema } from './UserUncheckedCreateWithoutAttemptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAttemptsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAttemptsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAttemptsInput>;
export const UserCreateOrConnectWithoutAttemptsInputObjectZodSchema = makeSchema();
