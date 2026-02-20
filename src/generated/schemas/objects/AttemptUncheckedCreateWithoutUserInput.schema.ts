import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StatusEnumSchema } from '../enums/StatusEnum.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  exam_id: z.string(),
  started_at: z.coerce.date().optional(),
  submitted_at: z.coerce.date(),
  correct_answers: z.number().int().optional(),
  wrong_answers: z.number().int().optional(),
  status: StatusEnumSchema.optional(),
  score: z.number().int().optional(),
  created_at: z.coerce.date().optional()
}).strict();
export const AttemptUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AttemptUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUncheckedCreateWithoutUserInput>;
export const AttemptUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
