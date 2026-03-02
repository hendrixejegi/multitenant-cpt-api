import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionCreateoptionsInputObjectSchema as QuestionCreateoptionsInputObjectSchema } from './QuestionCreateoptionsInput.schema';
import { ExamCreateNestedOneWithoutQuestionsInputObjectSchema as ExamCreateNestedOneWithoutQuestionsInputObjectSchema } from './ExamCreateNestedOneWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  options: z.union([z.lazy(() => QuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  correct_answer: z.string(),
  created_at: z.coerce.date().optional(),
  exam: z.lazy(() => ExamCreateNestedOneWithoutQuestionsInputObjectSchema)
}).strict();
export const QuestionCreateInputObjectSchema: z.ZodType<Prisma.QuestionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionCreateInput>;
export const QuestionCreateInputObjectZodSchema = makeSchema();
