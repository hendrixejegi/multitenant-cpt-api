import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionUncheckedCreateNestedManyWithoutExamInputObjectSchema as QuestionUncheckedCreateNestedManyWithoutExamInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutExamInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenant_id: z.string(),
  title: z.string(),
  description: z.string(),
  duration_minutes: z.number().int(),
  code: z.string(),
  is_published: z.boolean(),
  created_at: z.coerce.date().optional(),
  questions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutExamInputObjectSchema).optional()
}).strict();
export const ExamUncheckedCreateWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.ExamUncheckedCreateWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUncheckedCreateWithoutAttemptsInput>;
export const ExamUncheckedCreateWithoutAttemptsInputObjectZodSchema = makeSchema();
