import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const TenantMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMinOrderByAggregateInput>;
export const TenantMinOrderByAggregateInputObjectZodSchema = makeSchema();
