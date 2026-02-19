import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ExamOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ExamOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamOrderByRelationAggregateInput>;
export const ExamOrderByRelationAggregateInputObjectZodSchema = makeSchema();
