import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionCreateoptionsInputObjectSchema as QuestionCreateoptionsInputObjectSchema } from './QuestionCreateoptionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  exam_id: z.string(),
  text: z.string(),
  options: z.union([z.lazy(() => QuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  correct_answer: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const QuestionCreateManyInputObjectSchema: z.ZodType<Prisma.QuestionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionCreateManyInput>;
export const QuestionCreateManyInputObjectZodSchema = makeSchema();
