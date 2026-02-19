import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  duration_minutes: SortOrderSchema.optional()
}).strict();
export const ExamSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExamSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamSumOrderByAggregateInput>;
export const ExamSumOrderByAggregateInputObjectZodSchema = makeSchema();
