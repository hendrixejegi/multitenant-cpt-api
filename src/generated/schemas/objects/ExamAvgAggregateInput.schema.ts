import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  duration_minutes: z.literal(true).optional()
}).strict();
export const ExamAvgAggregateInputObjectSchema: z.ZodType<Prisma.ExamAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExamAvgAggregateInputType>;
export const ExamAvgAggregateInputObjectZodSchema = makeSchema();
