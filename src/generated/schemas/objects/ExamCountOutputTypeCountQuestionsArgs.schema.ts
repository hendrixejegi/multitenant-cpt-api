import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionWhereInputObjectSchema as QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionWhereInputObjectSchema).optional()
}).strict();
export const ExamCountOutputTypeCountQuestionsArgsObjectSchema = makeSchema();
export const ExamCountOutputTypeCountQuestionsArgsObjectZodSchema = makeSchema();
