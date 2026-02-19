import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionFindManySchema as QuestionFindManySchema } from '../findManyQuestion.schema';
import { AttemptFindManySchema as AttemptFindManySchema } from '../findManyAttempt.schema';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { ExamCountOutputTypeArgsObjectSchema as ExamCountOutputTypeArgsObjectSchema } from './ExamCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenant_id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  duration_minutes: z.boolean().optional(),
  code: z.boolean().optional(),
  is_published: z.boolean().optional(),
  created_at: z.boolean().optional(),
  questions: z.union([z.boolean(), z.lazy(() => QuestionFindManySchema)]).optional(),
  attempts: z.union([z.boolean(), z.lazy(() => AttemptFindManySchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ExamCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ExamSelectObjectSchema: z.ZodType<Prisma.ExamSelect> = makeSchema() as unknown as z.ZodType<Prisma.ExamSelect>;
export const ExamSelectObjectZodSchema = makeSchema();
