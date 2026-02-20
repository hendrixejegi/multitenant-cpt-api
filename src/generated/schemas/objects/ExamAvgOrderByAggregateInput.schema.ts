import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  duration_minutes: SortOrderSchema.optional()
}).strict();
export const ExamAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExamAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamAvgOrderByAggregateInput>;
export const ExamAvgOrderByAggregateInputObjectZodSchema = makeSchema();
