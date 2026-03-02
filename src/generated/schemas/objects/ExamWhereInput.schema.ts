import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { QuestionListRelationFilterObjectSchema as QuestionListRelationFilterObjectSchema } from './QuestionListRelationFilter.schema';
import { AttemptListRelationFilterObjectSchema as AttemptListRelationFilterObjectSchema } from './AttemptListRelationFilter.schema';
import { TenantScalarRelationFilterObjectSchema as TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const examwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExamWhereInputObjectSchema), z.lazy(() => ExamWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExamWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExamWhereInputObjectSchema), z.lazy(() => ExamWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenant_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  duration_minutes: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  is_published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  questions: z.lazy(() => QuestionListRelationFilterObjectSchema).optional(),
  attempts: z.lazy(() => AttemptListRelationFilterObjectSchema).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional()
}).strict();
export const ExamWhereInputObjectSchema: z.ZodType<Prisma.ExamWhereInput> = examwhereinputSchema as unknown as z.ZodType<Prisma.ExamWhereInput>;
export const ExamWhereInputObjectZodSchema = examwhereinputSchema;
