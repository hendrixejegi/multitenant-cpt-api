import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionCreateNestedManyWithoutExamInputObjectSchema as QuestionCreateNestedManyWithoutExamInputObjectSchema } from './QuestionCreateNestedManyWithoutExamInput.schema';
import { TenantCreateNestedOneWithoutExamsInputObjectSchema as TenantCreateNestedOneWithoutExamsInputObjectSchema } from './TenantCreateNestedOneWithoutExamsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  duration_minutes: z.number().int(),
  code: z.string(),
  is_published: z.boolean(),
  created_at: z.coerce.date().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutExamInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutExamsInputObjectSchema)
}).strict();
export const ExamCreateWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.ExamCreateWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateWithoutAttemptsInput>;
export const ExamCreateWithoutAttemptsInputObjectZodSchema = makeSchema();
