import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const TenantMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMaxOrderByAggregateInput>;
export const TenantMaxOrderByAggregateInputObjectZodSchema = makeSchema();
