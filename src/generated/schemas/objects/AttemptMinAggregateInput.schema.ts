import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  exam_id: z.literal(true).optional(),
  started_at: z.literal(true).optional(),
  submitted_at: z.literal(true).optional(),
  correct_answers: z.literal(true).optional(),
  wrong_answers: z.literal(true).optional(),
  status: z.literal(true).optional(),
  score: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const AttemptMinAggregateInputObjectSchema: z.ZodType<Prisma.AttemptMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttemptMinAggregateInputType>;
export const AttemptMinAggregateInputObjectZodSchema = makeSchema();
