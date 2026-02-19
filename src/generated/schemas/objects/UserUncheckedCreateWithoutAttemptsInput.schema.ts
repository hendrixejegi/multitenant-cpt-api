import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenant_id: z.string(),
  name: z.string(),
  email: z.string().optional().nullable(),
  password_hash: z.string().optional().nullable(),
  role: RoleEnumSchema,
  is_guest: z.boolean(),
  created_at: z.coerce.date().optional()
}).strict();
export const UserUncheckedCreateWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAttemptsInput>;
export const UserUncheckedCreateWithoutAttemptsInputObjectZodSchema = makeSchema();
