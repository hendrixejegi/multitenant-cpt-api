import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamArgsObjectSchema as ExamArgsObjectSchema } from './ExamArgs.schema'

const makeSchema = () => z.object({
  exam: z.union([z.boolean(), z.lazy(() => ExamArgsObjectSchema)]).optional()
}).strict();
export const QuestionIncludeObjectSchema: z.ZodType<Prisma.QuestionInclude> = makeSchema() as unknown as z.ZodType<Prisma.QuestionInclude>;
export const QuestionIncludeObjectZodSchema = makeSchema();
