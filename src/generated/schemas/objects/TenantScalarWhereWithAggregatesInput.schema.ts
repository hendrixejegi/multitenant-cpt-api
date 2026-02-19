import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tenantscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TenantScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TenantScalarWhereWithAggregatesInput> = tenantscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TenantScalarWhereWithAggregatesInput>;
export const TenantScalarWhereWithAggregatesInputObjectZodSchema = tenantscalarwherewithaggregatesinputSchema;
