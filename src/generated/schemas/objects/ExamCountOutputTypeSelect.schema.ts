import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCountOutputTypeCountQuestionsArgsObjectSchema as ExamCountOutputTypeCountQuestionsArgsObjectSchema } from './ExamCountOutputTypeCountQuestionsArgs.schema';
import { ExamCountOutputTypeCountAttemptsArgsObjectSchema as ExamCountOutputTypeCountAttemptsArgsObjectSchema } from './ExamCountOutputTypeCountAttemptsArgs.schema'

const makeSchema = () => z.object({
  questions: z.union([z.boolean(), z.lazy(() => ExamCountOutputTypeCountQuestionsArgsObjectSchema)]).optional(),
  attempts: z.union([z.boolean(), z.lazy(() => ExamCountOutputTypeCountAttemptsArgsObjectSchema)]).optional()
}).strict();
export const ExamCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ExamCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ExamCountOutputTypeSelect>;
export const ExamCountOutputTypeSelectObjectZodSchema = makeSchema();
