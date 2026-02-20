import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  duration_minutes: z.literal(true).optional()
}).strict();
export const ExamSumAggregateInputObjectSchema: z.ZodType<Prisma.ExamSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExamSumAggregateInputType>;
export const ExamSumAggregateInputObjectZodSchema = makeSchema();
