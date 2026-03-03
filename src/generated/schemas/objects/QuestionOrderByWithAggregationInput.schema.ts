import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionCountOrderByAggregateInputObjectSchema as QuestionCountOrderByAggregateInputObjectSchema } from './QuestionCountOrderByAggregateInput.schema';
import { QuestionMaxOrderByAggregateInputObjectSchema as QuestionMaxOrderByAggregateInputObjectSchema } from './QuestionMaxOrderByAggregateInput.schema';
import { QuestionMinOrderByAggregateInputObjectSchema as QuestionMinOrderByAggregateInputObjectSchema } from './QuestionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  exam_id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  correct_answer: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => QuestionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => QuestionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => QuestionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const QuestionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.QuestionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionOrderByWithAggregationInput>;
export const QuestionOrderByWithAggregationInputObjectZodSchema = makeSchema();
