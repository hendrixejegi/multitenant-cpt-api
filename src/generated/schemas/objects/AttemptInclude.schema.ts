import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamArgsObjectSchema as ExamArgsObjectSchema } from './ExamArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  exam: z.union([z.boolean(), z.lazy(() => ExamArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const AttemptIncludeObjectSchema: z.ZodType<Prisma.AttemptInclude> = makeSchema() as unknown as z.ZodType<Prisma.AttemptInclude>;
export const AttemptIncludeObjectZodSchema = makeSchema();
