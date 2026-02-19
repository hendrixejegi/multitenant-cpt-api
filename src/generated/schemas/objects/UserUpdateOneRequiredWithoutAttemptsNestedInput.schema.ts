import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateWithoutAttemptsInputObjectSchema as UserCreateWithoutAttemptsInputObjectSchema } from './UserCreateWithoutAttemptsInput.schema';
import { UserUncheckedCreateWithoutAttemptsInputObjectSchema as UserUncheckedCreateWithoutAttemptsInputObjectSchema } from './UserUncheckedCreateWithoutAttemptsInput.schema';
import { UserCreateOrConnectWithoutAttemptsInputObjectSchema as UserCreateOrConnectWithoutAttemptsInputObjectSchema } from './UserCreateOrConnectWithoutAttemptsInput.schema';
import { UserUpsertWithoutAttemptsInputObjectSchema as UserUpsertWithoutAttemptsInputObjectSchema } from './UserUpsertWithoutAttemptsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAttemptsInputObjectSchema as UserUpdateToOneWithWhereWithoutAttemptsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAttemptsInput.schema';
import { UserUpdateWithoutAttemptsInputObjectSchema as UserUpdateWithoutAttemptsInputObjectSchema } from './UserUpdateWithoutAttemptsInput.schema';
import { UserUncheckedUpdateWithoutAttemptsInputObjectSchema as UserUncheckedUpdateWithoutAttemptsInputObjectSchema } from './UserUncheckedUpdateWithoutAttemptsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAttemptsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAttemptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAttemptsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAttemptsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAttemptsInputObjectSchema), z.lazy(() => UserUpdateWithoutAttemptsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAttemptsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutAttemptsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAttemptsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutAttemptsNestedInput>;
export const UserUpdateOneRequiredWithoutAttemptsNestedInputObjectZodSchema = makeSchema();
