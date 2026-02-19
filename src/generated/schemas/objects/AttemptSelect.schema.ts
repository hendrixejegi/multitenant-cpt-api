import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamArgsObjectSchema as ExamArgsObjectSchema } from './ExamArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  exam_id: z.boolean().optional(),
  started_at: z.boolean().optional(),
  submitted_at: z.boolean().optional(),
  correct_answers: z.boolean().optional(),
  wrong_answers: z.boolean().optional(),
  status: z.boolean().optional(),
  score: z.boolean().optional(),
  created_at: z.boolean().optional(),
  exam: z.union([z.boolean(), z.lazy(() => ExamArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const AttemptSelectObjectSchema: z.ZodType<Prisma.AttemptSelect> = makeSchema() as unknown as z.ZodType<Prisma.AttemptSelect>;
export const AttemptSelectObjectZodSchema = makeSchema();
