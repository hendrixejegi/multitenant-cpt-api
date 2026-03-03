import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema';
import { AttemptUncheckedCreateNestedManyWithoutUserInputObjectSchema as AttemptUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AttemptUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  password_hash: z.string().optional().nullable(),
  role: RoleEnumSchema,
  is_guest: z.boolean(),
  created_at: z.coerce.date().optional(),
  attempts: z.lazy(() => AttemptUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutTenantInput>;
export const UserUncheckedCreateWithoutTenantInputObjectZodSchema = makeSchema();
