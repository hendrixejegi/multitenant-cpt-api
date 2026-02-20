import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateWithoutAttemptsInputObjectSchema as UserCreateWithoutAttemptsInputObjectSchema } from './UserCreateWithoutAttemptsInput.schema';
import { UserUncheckedCreateWithoutAttemptsInputObjectSchema as UserUncheckedCreateWithoutAttemptsInputObjectSchema } from './UserUncheckedCreateWithoutAttemptsInput.schema';
import { UserCreateOrConnectWithoutAttemptsInputObjectSchema as UserCreateOrConnectWithoutAttemptsInputObjectSchema } from './UserCreateOrConnectWithoutAttemptsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAttemptsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAttemptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAttemptsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAttemptsInput>;
export const UserCreateNestedOneWithoutAttemptsInputObjectZodSchema = makeSchema();
