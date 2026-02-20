import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamUpdateWithoutQuestionsInputObjectSchema as ExamUpdateWithoutQuestionsInputObjectSchema } from './ExamUpdateWithoutQuestionsInput.schema';
import { ExamUncheckedUpdateWithoutQuestionsInputObjectSchema as ExamUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ExamUncheckedUpdateWithoutQuestionsInput.schema';
import { ExamCreateWithoutQuestionsInputObjectSchema as ExamCreateWithoutQuestionsInputObjectSchema } from './ExamCreateWithoutQuestionsInput.schema';
import { ExamUncheckedCreateWithoutQuestionsInputObjectSchema as ExamUncheckedCreateWithoutQuestionsInputObjectSchema } from './ExamUncheckedCreateWithoutQuestionsInput.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ExamUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => ExamUncheckedUpdateWithoutQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => ExamCreateWithoutQuestionsInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutQuestionsInputObjectSchema)]),
  where: z.lazy(() => ExamWhereInputObjectSchema).optional()
}).strict();
export const ExamUpsertWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.ExamUpsertWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpsertWithoutQuestionsInput>;
export const ExamUpsertWithoutQuestionsInputObjectZodSchema = makeSchema();
