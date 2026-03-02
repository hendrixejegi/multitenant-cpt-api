import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const examscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ExamScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ExamScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExamScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExamScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ExamScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenant_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  duration_minutes: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  is_published: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ExamScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ExamScalarWhereWithAggregatesInput> = examscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ExamScalarWhereWithAggregatesInput>;
export const ExamScalarWhereWithAggregatesInputObjectZodSchema = examscalarwherewithaggregatesinputSchema;
