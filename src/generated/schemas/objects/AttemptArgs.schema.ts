import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptSelectObjectSchema as AttemptSelectObjectSchema } from './AttemptSelect.schema';
import { AttemptIncludeObjectSchema as AttemptIncludeObjectSchema } from './AttemptInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AttemptSelectObjectSchema).optional(),
  include: z.lazy(() => AttemptIncludeObjectSchema).optional()
}).strict();
export const AttemptArgsObjectSchema = makeSchema();
export const AttemptArgsObjectZodSchema = makeSchema();
