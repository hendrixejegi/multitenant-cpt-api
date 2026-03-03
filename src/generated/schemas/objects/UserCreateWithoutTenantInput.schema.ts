import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema';
import { AttemptCreateNestedManyWithoutUserInputObjectSchema as AttemptCreateNestedManyWithoutUserInputObjectSchema } from './AttemptCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  password_hash: z.string().optional().nullable(),
  role: RoleEnumSchema,
  is_guest: z.boolean(),
  created_at: z.coerce.date().optional(),
  attempts: z.lazy(() => AttemptCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutTenantInput>;
export const UserCreateWithoutTenantInputObjectZodSchema = makeSchema();
