import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamUncheckedCreateNestedManyWithoutTenantInputObjectSchema as ExamUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ExamUncheckedCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date().optional(),
  exams: z.lazy(() => ExamUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedCreateWithoutUsersInput>;
export const TenantUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
