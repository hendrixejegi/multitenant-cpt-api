import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamUpdateWithoutAttemptsInputObjectSchema as ExamUpdateWithoutAttemptsInputObjectSchema } from './ExamUpdateWithoutAttemptsInput.schema';
import { ExamUncheckedUpdateWithoutAttemptsInputObjectSchema as ExamUncheckedUpdateWithoutAttemptsInputObjectSchema } from './ExamUncheckedUpdateWithoutAttemptsInput.schema';
import { ExamCreateWithoutAttemptsInputObjectSchema as ExamCreateWithoutAttemptsInputObjectSchema } from './ExamCreateWithoutAttemptsInput.schema';
import { ExamUncheckedCreateWithoutAttemptsInputObjectSchema as ExamUncheckedCreateWithoutAttemptsInputObjectSchema } from './ExamUncheckedCreateWithoutAttemptsInput.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ExamUpdateWithoutAttemptsInputObjectSchema), z.lazy(() => ExamUncheckedUpdateWithoutAttemptsInputObjectSchema)]),
  create: z.union([z.lazy(() => ExamCreateWithoutAttemptsInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutAttemptsInputObjectSchema)]),
  where: z.lazy(() => ExamWhereInputObjectSchema).optional()
}).strict();
export const ExamUpsertWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.ExamUpsertWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpsertWithoutAttemptsInput>;
export const ExamUpsertWithoutAttemptsInputObjectZodSchema = makeSchema();
