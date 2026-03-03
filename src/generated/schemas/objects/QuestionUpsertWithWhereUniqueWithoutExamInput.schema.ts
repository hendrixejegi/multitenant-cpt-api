import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutExamInputObjectSchema as QuestionUpdateWithoutExamInputObjectSchema } from './QuestionUpdateWithoutExamInput.schema';
import { QuestionUncheckedUpdateWithoutExamInputObjectSchema as QuestionUncheckedUpdateWithoutExamInputObjectSchema } from './QuestionUncheckedUpdateWithoutExamInput.schema';
import { QuestionCreateWithoutExamInputObjectSchema as QuestionCreateWithoutExamInputObjectSchema } from './QuestionCreateWithoutExamInput.schema';
import { QuestionUncheckedCreateWithoutExamInputObjectSchema as QuestionUncheckedCreateWithoutExamInputObjectSchema } from './QuestionUncheckedCreateWithoutExamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QuestionUpdateWithoutExamInputObjectSchema), z.lazy(() => QuestionUncheckedUpdateWithoutExamInputObjectSchema)]),
  create: z.union([z.lazy(() => QuestionCreateWithoutExamInputObjectSchema), z.lazy(() => QuestionUncheckedCreateWithoutExamInputObjectSchema)])
}).strict();
export const QuestionUpsertWithWhereUniqueWithoutExamInputObjectSchema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutExamInput>;
export const QuestionUpsertWithWhereUniqueWithoutExamInputObjectZodSchema = makeSchema();
