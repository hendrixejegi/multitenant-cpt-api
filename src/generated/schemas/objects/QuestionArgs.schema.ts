import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionSelectObjectSchema as QuestionSelectObjectSchema } from './QuestionSelect.schema';
import { QuestionIncludeObjectSchema as QuestionIncludeObjectSchema } from './QuestionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QuestionSelectObjectSchema).optional(),
  include: z.lazy(() => QuestionIncludeObjectSchema).optional()
}).strict();
export const QuestionArgsObjectSchema = makeSchema();
export const QuestionArgsObjectZodSchema = makeSchema();
