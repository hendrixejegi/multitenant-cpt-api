import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCreateNestedManyWithoutTenantInputObjectSchema as ExamCreateNestedManyWithoutTenantInputObjectSchema } from './ExamCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date().optional(),
  exams: z.lazy(() => ExamCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.TenantCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateWithoutUsersInput>;
export const TenantCreateWithoutUsersInputObjectZodSchema = makeSchema();
