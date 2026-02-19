import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  created_at: SortOrderSchema.optional()
}).strict();
export const AttemptCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AttemptCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptCountOrderByAggregateInput>;
export const AttemptCountOrderByAggregateInputObjectZodSchema = makeSchema();
