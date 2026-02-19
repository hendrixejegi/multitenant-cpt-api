import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const questionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => QuestionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuestionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuestionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuestionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuestionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  exam_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  correct_answer: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QuestionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.QuestionScalarWhereWithAggregatesInput> = questionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.QuestionScalarWhereWithAggregatesInput>;
export const QuestionScalarWhereWithAggregatesInputObjectZodSchema = questionscalarwherewithaggregatesinputSchema;
