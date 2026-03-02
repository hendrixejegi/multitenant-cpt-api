import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionCreateWithoutExamInputObjectSchema as QuestionCreateWithoutExamInputObjectSchema } from './QuestionCreateWithoutExamInput.schema';
import { QuestionUncheckedCreateWithoutExamInputObjectSchema as QuestionUncheckedCreateWithoutExamInputObjectSchema } from './QuestionUncheckedCreateWithoutExamInput.schema';
import { QuestionCreateOrConnectWithoutExamInputObjectSchema as QuestionCreateOrConnectWithoutExamInputObjectSchema } from './QuestionCreateOrConnectWithoutExamInput.schema';
import { QuestionCreateManyExamInputEnvelopeObjectSchema as QuestionCreateManyExamInputEnvelopeObjectSchema } from './QuestionCreateManyExamInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuestionCreateWithoutExamInputObjectSchema), z.lazy(() => QuestionCreateWithoutExamInputObjectSchema).array(), z.lazy(() => QuestionUncheckedCreateWithoutExamInputObjectSchema), z.lazy(() => QuestionUncheckedCreateWithoutExamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuestionCreateOrConnectWithoutExamInputObjectSchema), z.lazy(() => QuestionCreateOrConnectWithoutExamInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuestionCreateManyExamInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QuestionWhereUniqueInputObjectSchema), z.lazy(() => QuestionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QuestionUncheckedCreateNestedManyWithoutExamInputObjectSchema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutExamInput>;
export const QuestionUncheckedCreateNestedManyWithoutExamInputObjectZodSchema = makeSchema();
