import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserUncheckedCreateNestedManyWithoutTenantInputObjectSchema as UserUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ExamUncheckedCreateNestedManyWithoutTenantInputObjectSchema as ExamUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ExamUncheckedCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date().optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  exams: z.lazy(() => ExamUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TenantUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedCreateInput>;
export const TenantUncheckedCreateInputObjectZodSchema = makeSchema();
