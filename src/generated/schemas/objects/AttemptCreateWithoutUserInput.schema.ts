import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StatusEnumSchema } from '../enums/StatusEnum.schema';
import { ExamCreateNestedOneWithoutAttemptsInputObjectSchema as ExamCreateNestedOneWithoutAttemptsInputObjectSchema } from './ExamCreateNestedOneWithoutAttemptsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  started_at: z.coerce.date().optional(),
  submitted_at: z.coerce.date().optional().nullable(),
  correct_answers: z.number().int().optional(),
  wrong_answers: z.number().int().optional(),
  status: StatusEnumSchema.optional(),
  score: z.number().int().optional(),
  created_at: z.coerce.date().optional(),
  exam: z.lazy(() => ExamCreateNestedOneWithoutAttemptsInputObjectSchema)
}).strict();
export const AttemptCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AttemptCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptCreateWithoutUserInput>;
export const AttemptCreateWithoutUserInputObjectZodSchema = makeSchema();
