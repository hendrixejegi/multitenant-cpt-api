import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const examscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExamScalarWhereInputObjectSchema), z.lazy(() => ExamScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExamScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExamScalarWhereInputObjectSchema), z.lazy(() => ExamScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenant_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  duration_minutes: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  is_published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ExamScalarWhereInputObjectSchema: z.ZodType<Prisma.ExamScalarWhereInput> = examscalarwhereinputSchema as unknown as z.ZodType<Prisma.ExamScalarWhereInput>;
export const ExamScalarWhereInputObjectZodSchema = examscalarwhereinputSchema;
