import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema';
import { AttemptUncheckedCreateNestedManyWithoutUserInputObjectSchema as AttemptUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AttemptUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenant_id: z.string(),
  name: z.string(),
  email: z.string().optional().nullable(),
  password_hash: z.string().optional().nullable(),
  role: RoleEnumSchema,
  is_guest: z.boolean(),
  created_at: z.coerce.date().optional(),
  attempts: z.lazy(() => AttemptUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
