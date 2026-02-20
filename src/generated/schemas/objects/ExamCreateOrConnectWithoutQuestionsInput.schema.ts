import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamCreateWithoutQuestionsInputObjectSchema as ExamCreateWithoutQuestionsInputObjectSchema } from './ExamCreateWithoutQuestionsInput.schema';
import { ExamUncheckedCreateWithoutQuestionsInputObjectSchema as ExamUncheckedCreateWithoutQuestionsInputObjectSchema } from './ExamUncheckedCreateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExamCreateWithoutQuestionsInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutQuestionsInputObjectSchema)])
}).strict();
export const ExamCreateOrConnectWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.ExamCreateOrConnectWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateOrConnectWithoutQuestionsInput>;
export const ExamCreateOrConnectWithoutQuestionsInputObjectZodSchema = makeSchema();
