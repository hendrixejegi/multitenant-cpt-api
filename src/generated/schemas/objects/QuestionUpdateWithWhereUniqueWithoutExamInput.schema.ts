import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutExamInputObjectSchema as QuestionUpdateWithoutExamInputObjectSchema } from './QuestionUpdateWithoutExamInput.schema';
import { QuestionUncheckedUpdateWithoutExamInputObjectSchema as QuestionUncheckedUpdateWithoutExamInputObjectSchema } from './QuestionUncheckedUpdateWithoutExamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QuestionUpdateWithoutExamInputObjectSchema), z.lazy(() => QuestionUncheckedUpdateWithoutExamInputObjectSchema)])
}).strict();
export const QuestionUpdateWithWhereUniqueWithoutExamInputObjectSchema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutExamInput>;
export const QuestionUpdateWithWhereUniqueWithoutExamInputObjectZodSchema = makeSchema();
