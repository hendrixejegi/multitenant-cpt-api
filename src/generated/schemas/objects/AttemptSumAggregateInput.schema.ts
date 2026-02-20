import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  correct_answers: z.literal(true).optional(),
  wrong_answers: z.literal(true).optional(),
  score: z.literal(true).optional()
}).strict();
export const AttemptSumAggregateInputObjectSchema: z.ZodType<Prisma.AttemptSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttemptSumAggregateInputType>;
export const AttemptSumAggregateInputObjectZodSchema = makeSchema();
