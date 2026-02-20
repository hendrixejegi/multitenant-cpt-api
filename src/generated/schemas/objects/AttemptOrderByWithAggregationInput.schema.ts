import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AttemptCountOrderByAggregateInputObjectSchema as AttemptCountOrderByAggregateInputObjectSchema } from './AttemptCountOrderByAggregateInput.schema';
import { AttemptAvgOrderByAggregateInputObjectSchema as AttemptAvgOrderByAggregateInputObjectSchema } from './AttemptAvgOrderByAggregateInput.schema';
import { AttemptMaxOrderByAggregateInputObjectSchema as AttemptMaxOrderByAggregateInputObjectSchema } from './AttemptMaxOrderByAggregateInput.schema';
import { AttemptMinOrderByAggregateInputObjectSchema as AttemptMinOrderByAggregateInputObjectSchema } from './AttemptMinOrderByAggregateInput.schema';
import { AttemptSumOrderByAggregateInputObjectSchema as AttemptSumOrderByAggregateInputObjectSchema } from './AttemptSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  exam_id: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  submitted_at: SortOrderSchema.optional(),
  correct_answers: SortOrderSchema.optional(),
  wrong_answers: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  score: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => AttemptCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AttemptAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AttemptMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AttemptMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AttemptSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AttemptOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AttemptOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptOrderByWithAggregationInput>;
export const AttemptOrderByWithAggregationInputObjectZodSchema = makeSchema();
