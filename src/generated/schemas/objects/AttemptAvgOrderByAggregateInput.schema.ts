import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  correct_answers: SortOrderSchema.optional(),
  wrong_answers: SortOrderSchema.optional(),
  score: SortOrderSchema.optional()
}).strict();
export const AttemptAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AttemptAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptAvgOrderByAggregateInput>;
export const AttemptAvgOrderByAggregateInputObjectZodSchema = makeSchema();
