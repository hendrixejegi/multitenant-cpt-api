import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const QuestionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.QuestionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionOrderByRelationAggregateInput>;
export const QuestionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
