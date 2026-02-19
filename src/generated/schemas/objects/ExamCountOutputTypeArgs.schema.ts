import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCountOutputTypeSelectObjectSchema as ExamCountOutputTypeSelectObjectSchema } from './ExamCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ExamCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ExamCountOutputTypeArgsObjectSchema = makeSchema();
export const ExamCountOutputTypeArgsObjectZodSchema = makeSchema();
