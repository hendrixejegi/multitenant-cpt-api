import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAttemptsInputObjectSchema as UserUpdateWithoutAttemptsInputObjectSchema } from './UserUpdateWithoutAttemptsInput.schema';
import { UserUncheckedUpdateWithoutAttemptsInputObjectSchema as UserUncheckedUpdateWithoutAttemptsInputObjectSchema } from './UserUncheckedUpdateWithoutAttemptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAttemptsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAttemptsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAttemptsInput>;
export const UserUpdateToOneWithWhereWithoutAttemptsInputObjectZodSchema = makeSchema();
