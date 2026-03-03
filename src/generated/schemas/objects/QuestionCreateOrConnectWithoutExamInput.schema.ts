import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutExamInputObjectSchema as QuestionCreateWithoutExamInputObjectSchema } from './QuestionCreateWithoutExamInput.schema';
import { QuestionUncheckedCreateWithoutExamInputObjectSchema as QuestionUncheckedCreateWithoutExamInputObjectSchema } from './QuestionUncheckedCreateWithoutExamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QuestionCreateWithoutExamInputObjectSchema), z.lazy(() => QuestionUncheckedCreateWithoutExamInputObjectSchema)])
}).strict();
export const QuestionCreateOrConnectWithoutExamInputObjectSchema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionCreateOrConnectWithoutExamInput>;
export const QuestionCreateOrConnectWithoutExamInputObjectZodSchema = makeSchema();
