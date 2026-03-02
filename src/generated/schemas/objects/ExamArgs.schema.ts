import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamSelectObjectSchema as ExamSelectObjectSchema } from './ExamSelect.schema';
import { ExamIncludeObjectSchema as ExamIncludeObjectSchema } from './ExamInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ExamSelectObjectSchema).optional(),
  include: z.lazy(() => ExamIncludeObjectSchema).optional()
}).strict();
export const ExamArgsObjectSchema = makeSchema();
export const ExamArgsObjectZodSchema = makeSchema();
