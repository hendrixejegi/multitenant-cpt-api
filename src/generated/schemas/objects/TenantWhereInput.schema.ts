import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { ExamListRelationFilterObjectSchema as ExamListRelationFilterObjectSchema } from './ExamListRelationFilter.schema'

const tenantwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantWhereInputObjectSchema), z.lazy(() => TenantWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantWhereInputObjectSchema), z.lazy(() => TenantWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  exams: z.lazy(() => ExamListRelationFilterObjectSchema).optional()
}).strict();
export const TenantWhereInputObjectSchema: z.ZodType<Prisma.TenantWhereInput> = tenantwhereinputSchema as unknown as z.ZodType<Prisma.TenantWhereInput>;
export const TenantWhereInputObjectZodSchema = tenantwhereinputSchema;
