import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenant_id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  duration_minutes: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  is_published: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ExamCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExamCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCountOrderByAggregateInput>;
export const ExamCountOrderByAggregateInputObjectZodSchema = makeSchema();
