import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCreateWithoutQuestionsInputObjectSchema as ExamCreateWithoutQuestionsInputObjectSchema } from './ExamCreateWithoutQuestionsInput.schema';
import { ExamUncheckedCreateWithoutQuestionsInputObjectSchema as ExamUncheckedCreateWithoutQuestionsInputObjectSchema } from './ExamUncheckedCreateWithoutQuestionsInput.schema';
import { ExamCreateOrConnectWithoutQuestionsInputObjectSchema as ExamCreateOrConnectWithoutQuestionsInputObjectSchema } from './ExamCreateOrConnectWithoutQuestionsInput.schema';
import { ExamUpsertWithoutQuestionsInputObjectSchema as ExamUpsertWithoutQuestionsInputObjectSchema } from './ExamUpsertWithoutQuestionsInput.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateToOneWithWhereWithoutQuestionsInputObjectSchema as ExamUpdateToOneWithWhereWithoutQuestionsInputObjectSchema } from './ExamUpdateToOneWithWhereWithoutQuestionsInput.schema';
import { ExamUpdateWithoutQuestionsInputObjectSchema as ExamUpdateWithoutQuestionsInputObjectSchema } from './ExamUpdateWithoutQuestionsInput.schema';
import { ExamUncheckedUpdateWithoutQuestionsInputObjectSchema as ExamUncheckedUpdateWithoutQuestionsInputObjectSchema } from './ExamUncheckedUpdateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExamCreateWithoutQuestionsInputObjectSchema), z.lazy(() => ExamUncheckedCreateWithoutQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ExamCreateOrConnectWithoutQuestionsInputObjectSchema).optional(),
  upsert: z.lazy(() => ExamUpsertWithoutQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => ExamWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ExamUpdateToOneWithWhereWithoutQuestionsInputObjectSchema), z.lazy(() => ExamUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => ExamUncheckedUpdateWithoutQuestionsInputObjectSchema)]).optional()
}).strict();
export const ExamUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema: z.ZodType<Prisma.ExamUpdateOneRequiredWithoutQuestionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpdateOneRequiredWithoutQuestionsNestedInput>;
export const ExamUpdateOneRequiredWithoutQuestionsNestedInputObjectZodSchema = makeSchema();
