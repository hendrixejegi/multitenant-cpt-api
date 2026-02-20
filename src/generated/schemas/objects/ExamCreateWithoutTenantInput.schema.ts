import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionCreateNestedManyWithoutExamInputObjectSchema as QuestionCreateNestedManyWithoutExamInputObjectSchema } from './QuestionCreateNestedManyWithoutExamInput.schema';
import { AttemptCreateNestedManyWithoutExamInputObjectSchema as AttemptCreateNestedManyWithoutExamInputObjectSchema } from './AttemptCreateNestedManyWithoutExamInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  duration_minutes: z.number().int(),
  code: z.string(),
  is_published: z.boolean(),
  created_at: z.coerce.date().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutExamInputObjectSchema).optional(),
  attempts: z.lazy(() => AttemptCreateNestedManyWithoutExamInputObjectSchema).optional()
}).strict();
export const ExamCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ExamCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateWithoutTenantInput>;
export const ExamCreateWithoutTenantInputObjectZodSchema = makeSchema();
