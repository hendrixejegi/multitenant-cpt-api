import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionFindManySchema as QuestionFindManySchema } from '../findManyQuestion.schema';
import { AttemptFindManySchema as AttemptFindManySchema } from '../findManyAttempt.schema';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { ExamCountOutputTypeArgsObjectSchema as ExamCountOutputTypeArgsObjectSchema } from './ExamCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  questions: z.union([z.boolean(), z.lazy(() => QuestionFindManySchema)]).optional(),
  attempts: z.union([z.boolean(), z.lazy(() => AttemptFindManySchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ExamCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ExamIncludeObjectSchema: z.ZodType<Prisma.ExamInclude> = makeSchema() as unknown as z.ZodType<Prisma.ExamInclude>;
export const ExamIncludeObjectZodSchema = makeSchema();
