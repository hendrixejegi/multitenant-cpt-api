import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateNestedManyWithoutTenantInputObjectSchema as UserCreateNestedManyWithoutTenantInputObjectSchema } from './UserCreateNestedManyWithoutTenantInput.schema';
import { ExamCreateNestedManyWithoutTenantInputObjectSchema as ExamCreateNestedManyWithoutTenantInputObjectSchema } from './ExamCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  exams: z.lazy(() => ExamCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantCreateInputObjectSchema: z.ZodType<Prisma.TenantCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateInput>;
export const TenantCreateInputObjectZodSchema = makeSchema();
