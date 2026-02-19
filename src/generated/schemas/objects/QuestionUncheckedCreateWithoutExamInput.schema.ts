import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionCreateoptionsInputObjectSchema as QuestionCreateoptionsInputObjectSchema } from './QuestionCreateoptionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  options: z.union([z.lazy(() => QuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  correct_answer: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const QuestionUncheckedCreateWithoutExamInputObjectSchema: z.ZodType<Prisma.QuestionUncheckedCreateWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionUncheckedCreateWithoutExamInput>;
export const QuestionUncheckedCreateWithoutExamInputObjectZodSchema = makeSchema();
