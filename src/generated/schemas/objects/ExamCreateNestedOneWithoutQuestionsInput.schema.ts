import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCreateWithoutQuestionsInputObjectSchema as ExamCreateWithoutQuestionsInputObjectSchema } from './ExamCreateWithoutQuestionsInput.schema';
import { ExamUncheckedCreateWithoutQuestionsInputObjectSchema as ExamUncheckedCreateWithoutQuestionsInputObjectSchema } from './ExamUncheckedCreateWithoutQuestionsInput.schema';
import { ExamCreateOrConnectWithoutQuestionsInputObjectSchema as ExamCreateOrConnectWithoutQuestionsInputObjectSchema } from './ExamCreateOrConnectWithoutQuestionsInput.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExamCreateWithoutQuestionsInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExamCreateOrConnectWithoutQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => ExamWhereUniqueInputObjectSchema).optional()
}).strict();
export const ExamCreateNestedOneWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.ExamCreateNestedOneWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateNestedOneWithoutQuestionsInput>;
export const ExamCreateNestedOneWithoutQuestionsInputObjectZodSchema = makeSchema();
