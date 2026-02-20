import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantCountOrderByAggregateInputObjectSchema as TenantCountOrderByAggregateInputObjectSchema } from './TenantCountOrderByAggregateInput.schema';
import { TenantMaxOrderByAggregateInputObjectSchema as TenantMaxOrderByAggregateInputObjectSchema } from './TenantMaxOrderByAggregateInput.schema';
import { TenantMinOrderByAggregateInputObjectSchema as TenantMinOrderByAggregateInputObjectSchema } from './TenantMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => TenantCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TenantMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TenantMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TenantOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TenantOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantOrderByWithAggregationInput>;
export const TenantOrderByWithAggregationInputObjectZodSchema = makeSchema();
