import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema';
import { ExamUpdateWithoutQuestionsInputObjectSchema as ExamUpdateWithoutQuestionsInputObjectSchema } from './ExamUpdateWithoutQuestionsInput.schema';
import { ExamUncheckedUpdateWithoutQuestionsInputObjectSchema as ExamUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ExamUncheckedUpdateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ExamUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => ExamUncheckedUpdateWithoutQuestionsInputObjectSchema)])
}).strict();
export const ExamUpdateToOneWithWhereWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.ExamUpdateToOneWithWhereWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpdateToOneWithWhereWithoutQuestionsInput>;
export const ExamUpdateToOneWithWhereWithoutQuestionsInputObjectZodSchema = makeSchema();
