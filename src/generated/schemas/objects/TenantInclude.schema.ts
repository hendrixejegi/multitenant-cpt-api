import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { ExamFindManySchema as ExamFindManySchema } from '../findManyExam.schema';
import { TenantCountOutputTypeArgsObjectSchema as TenantCountOutputTypeArgsObjectSchema } from './TenantCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  exams: z.union([z.boolean(), z.lazy(() => ExamFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantIncludeObjectSchema: z.ZodType<Prisma.TenantInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantInclude>;
export const TenantIncludeObjectZodSchema = makeSchema();
