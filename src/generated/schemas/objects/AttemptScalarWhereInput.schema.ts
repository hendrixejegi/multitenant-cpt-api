import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumStatusEnumFilterObjectSchema as EnumStatusEnumFilterObjectSchema } from './EnumStatusEnumFilter.schema';
import { StatusEnumSchema } from '../enums/StatusEnum.schema'

const attemptscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AttemptScalarWhereInputObjectSchema), z.lazy(() => AttemptScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AttemptScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AttemptScalarWhereInputObjectSchema), z.lazy(() => AttemptScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exam_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  started_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  submitted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  correct_answers: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  wrong_answers: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumStatusEnumFilterObjectSchema), StatusEnumSchema]).optional(),
  score: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AttemptScalarWhereInputObjectSchema: z.ZodType<Prisma.AttemptScalarWhereInput> = attemptscalarwhereinputSchema as unknown as z.ZodType<Prisma.AttemptScalarWhereInput>;
export const AttemptScalarWhereInputObjectZodSchema = attemptscalarwhereinputSchema;
