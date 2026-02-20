import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExamCountOrderByAggregateInputObjectSchema as ExamCountOrderByAggregateInputObjectSchema } from './ExamCountOrderByAggregateInput.schema';
import { ExamAvgOrderByAggregateInputObjectSchema as ExamAvgOrderByAggregateInputObjectSchema } from './ExamAvgOrderByAggregateInput.schema';
import { ExamMaxOrderByAggregateInputObjectSchema as ExamMaxOrderByAggregateInputObjectSchema } from './ExamMaxOrderByAggregateInput.schema';
import { ExamMinOrderByAggregateInputObjectSchema as ExamMinOrderByAggregateInputObjectSchema } from './ExamMinOrderByAggregateInput.schema';
import { ExamSumOrderByAggregateInputObjectSchema as ExamSumOrderByAggregateInputObjectSchema } from './ExamSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenant_id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  duration_minutes: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  is_published: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ExamCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ExamAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ExamMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ExamMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ExamSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ExamOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ExamOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamOrderByWithAggregationInput>;
export const ExamOrderByWithAggregationInputObjectZodSchema = makeSchema();
