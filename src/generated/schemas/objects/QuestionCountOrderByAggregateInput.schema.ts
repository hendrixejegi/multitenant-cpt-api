import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  exam_id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  correct_answer: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const QuestionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuestionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionCountOrderByAggregateInput>;
export const QuestionCountOrderByAggregateInputObjectZodSchema = makeSchema();
