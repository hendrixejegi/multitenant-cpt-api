import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptCreateNestedManyWithoutExamInputObjectSchema as AttemptCreateNestedManyWithoutExamInputObjectSchema } from './AttemptCreateNestedManyWithoutExamInput.schema';
import { TenantCreateNestedOneWithoutExamsInputObjectSchema as TenantCreateNestedOneWithoutExamsInputObjectSchema } from './TenantCreateNestedOneWithoutExamsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  duration_minutes: z.number().int(),
  code: z.string(),
  is_published: z.boolean(),
  created_at: z.coerce.date().optional(),
  attempts: z.lazy(() => AttemptCreateNestedManyWithoutExamInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutExamsInputObjectSchema)
}).strict();
export const ExamCreateWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.ExamCreateWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateWithoutQuestionsInput>;
export const ExamCreateWithoutQuestionsInputObjectZodSchema = makeSchema();
