import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumStatusEnumWithAggregatesFilterObjectSchema as EnumStatusEnumWithAggregatesFilterObjectSchema } from './EnumStatusEnumWithAggregatesFilter.schema';
import { StatusEnumSchema } from '../enums/StatusEnum.schema'

const attemptscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AttemptScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AttemptScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AttemptScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AttemptScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AttemptScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  exam_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  started_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  submitted_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  correct_answers: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  wrong_answers: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumStatusEnumWithAggregatesFilterObjectSchema), StatusEnumSchema]).optional(),
  score: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AttemptScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AttemptScalarWhereWithAggregatesInput> = attemptscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AttemptScalarWhereWithAggregatesInput>;
export const AttemptScalarWhereWithAggregatesInputObjectZodSchema = attemptscalarwherewithaggregatesinputSchema;
