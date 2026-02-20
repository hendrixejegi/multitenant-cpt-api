import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamArgsObjectSchema as ExamArgsObjectSchema } from './ExamArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  exam_id: z.boolean().optional(),
  text: z.boolean().optional(),
  options: z.boolean().optional(),
  correct_answer: z.boolean().optional(),
  created_at: z.boolean().optional(),
  exam: z.union([z.boolean(), z.lazy(() => ExamArgsObjectSchema)]).optional()
}).strict();
export const QuestionSelectObjectSchema: z.ZodType<Prisma.QuestionSelect> = makeSchema() as unknown as z.ZodType<Prisma.QuestionSelect>;
export const QuestionSelectObjectZodSchema = makeSchema();
