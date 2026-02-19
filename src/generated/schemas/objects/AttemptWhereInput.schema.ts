import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumStatusEnumFilterObjectSchema as EnumStatusEnumFilterObjectSchema } from './EnumStatusEnumFilter.schema';
import { StatusEnumSchema } from '../enums/StatusEnum.schema';
import { ExamScalarRelationFilterObjectSchema as ExamScalarRelationFilterObjectSchema } from './ExamScalarRelationFilter.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const attemptwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AttemptWhereInputObjectSchema), z.lazy(() => AttemptWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AttemptWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AttemptWhereInputObjectSchema), z.lazy(() => AttemptWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exam_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  started_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  submitted_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  correct_answers: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  wrong_answers: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumStatusEnumFilterObjectSchema), StatusEnumSchema]).optional(),
  score: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  exam: z.union([z.lazy(() => ExamScalarRelationFilterObjectSchema), z.lazy(() => ExamWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AttemptWhereInputObjectSchema: z.ZodType<Prisma.AttemptWhereInput> = attemptwhereinputSchema as unknown as z.ZodType<Prisma.AttemptWhereInput>;
export const AttemptWhereInputObjectZodSchema = attemptwhereinputSchema;
