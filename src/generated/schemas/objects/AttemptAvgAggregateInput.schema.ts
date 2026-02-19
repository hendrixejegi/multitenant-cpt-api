import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  correct_answers: z.literal(true).optional(),
  wrong_answers: z.literal(true).optional(),
  score: z.literal(true).optional()
}).strict();
export const AttemptAvgAggregateInputObjectSchema: z.ZodType<Prisma.AttemptAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttemptAvgAggregateInputType>;
export const AttemptAvgAggregateInputObjectZodSchema = makeSchema();
