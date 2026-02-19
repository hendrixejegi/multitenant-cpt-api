import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const questionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QuestionScalarWhereInputObjectSchema), z.lazy(() => QuestionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuestionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuestionScalarWhereInputObjectSchema), z.lazy(() => QuestionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exam_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  correct_answer: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QuestionScalarWhereInputObjectSchema: z.ZodType<Prisma.QuestionScalarWhereInput> = questionscalarwhereinputSchema as unknown as z.ZodType<Prisma.QuestionScalarWhereInput>;
export const QuestionScalarWhereInputObjectZodSchema = questionscalarwhereinputSchema;
