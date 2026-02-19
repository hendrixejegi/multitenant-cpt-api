import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  exam_id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  correct_answer: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const QuestionMaxAggregateInputObjectSchema: z.ZodType<Prisma.QuestionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuestionMaxAggregateInputType>;
export const QuestionMaxAggregateInputObjectZodSchema = makeSchema();
