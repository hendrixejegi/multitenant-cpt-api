import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StatusEnumSchema } from '../enums/StatusEnum.schema';
import { UserCreateNestedOneWithoutAttemptsInputObjectSchema as UserCreateNestedOneWithoutAttemptsInputObjectSchema } from './UserCreateNestedOneWithoutAttemptsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  started_at: z.coerce.date().optional(),
  submitted_at: z.coerce.date(),
  correct_answers: z.number().int().optional(),
  wrong_answers: z.number().int().optional(),
  status: StatusEnumSchema.optional(),
  score: z.number().int().optional(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAttemptsInputObjectSchema)
}).strict();
export const AttemptCreateWithoutExamInputObjectSchema: z.ZodType<Prisma.AttemptCreateWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptCreateWithoutExamInput>;
export const AttemptCreateWithoutExamInputObjectZodSchema = makeSchema();
