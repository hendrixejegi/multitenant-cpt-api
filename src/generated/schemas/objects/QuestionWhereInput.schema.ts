import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ExamScalarRelationFilterObjectSchema as ExamScalarRelationFilterObjectSchema } from './ExamScalarRelationFilter.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema'

const questionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QuestionWhereInputObjectSchema), z.lazy(() => QuestionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuestionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuestionWhereInputObjectSchema), z.lazy(() => QuestionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exam_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  correct_answer: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  exam: z.union([z.lazy(() => ExamScalarRelationFilterObjectSchema), z.lazy(() => ExamWhereInputObjectSchema)]).optional()
}).strict();
export const QuestionWhereInputObjectSchema: z.ZodType<Prisma.QuestionWhereInput> = questionwhereinputSchema as unknown as z.ZodType<Prisma.QuestionWhereInput>;
export const QuestionWhereInputObjectZodSchema = questionwhereinputSchema;
