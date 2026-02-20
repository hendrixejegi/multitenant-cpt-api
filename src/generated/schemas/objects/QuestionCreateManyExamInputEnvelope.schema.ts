import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionCreateManyExamInputObjectSchema as QuestionCreateManyExamInputObjectSchema } from './QuestionCreateManyExamInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QuestionCreateManyExamInputObjectSchema), z.lazy(() => QuestionCreateManyExamInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const QuestionCreateManyExamInputEnvelopeObjectSchema: z.ZodType<Prisma.QuestionCreateManyExamInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QuestionCreateManyExamInputEnvelope>;
export const QuestionCreateManyExamInputEnvelopeObjectZodSchema = makeSchema();
