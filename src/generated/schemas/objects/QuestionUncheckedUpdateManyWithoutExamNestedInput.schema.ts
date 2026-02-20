import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionCreateWithoutExamInputObjectSchema as QuestionCreateWithoutExamInputObjectSchema } from './QuestionCreateWithoutExamInput.schema';
import { QuestionUncheckedCreateWithoutExamInputObjectSchema as QuestionUncheckedCreateWithoutExamInputObjectSchema } from './QuestionUncheckedCreateWithoutExamInput.schema';
import { QuestionCreateOrConnectWithoutExamInputObjectSchema as QuestionCreateOrConnectWithoutExamInputObjectSchema } from './QuestionCreateOrConnectWithoutExamInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutExamInputObjectSchema as QuestionUpsertWithWhereUniqueWithoutExamInputObjectSchema } from './QuestionUpsertWithWhereUniqueWithoutExamInput.schema';
import { QuestionCreateManyExamInputEnvelopeObjectSchema as QuestionCreateManyExamInputEnvelopeObjectSchema } from './QuestionCreateManyExamInputEnvelope.schema';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutExamInputObjectSchema as QuestionUpdateWithWhereUniqueWithoutExamInputObjectSchema } from './QuestionUpdateWithWhereUniqueWithoutExamInput.schema';
import { QuestionUpdateManyWithWhereWithoutExamInputObjectSchema as QuestionUpdateManyWithWhereWithoutExamInputObjectSchema } from './QuestionUpdateManyWithWhereWithoutExamInput.schema';
import { QuestionScalarWhereInputObjectSchema as QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuestionCreateWithoutExamInputObjectSchema), z.lazy(() => QuestionCreateWithoutExamInputObjectSchema).array(), z.lazy(() => QuestionUncheckedCreateWithoutExamInputObjectSchema), z.lazy(() => QuestionUncheckedCreateWithoutExamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuestionCreateOrConnectWithoutExamInputObjectSchema), z.lazy(() => QuestionCreateOrConnectWithoutExamInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QuestionUpsertWithWhereUniqueWithoutExamInputObjectSchema), z.lazy(() => QuestionUpsertWithWhereUniqueWithoutExamInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuestionCreateManyExamInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QuestionWhereUniqueInputObjectSchema), z.lazy(() => QuestionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QuestionWhereUniqueInputObjectSchema), z.lazy(() => QuestionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QuestionWhereUniqueInputObjectSchema), z.lazy(() => QuestionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QuestionWhereUniqueInputObjectSchema), z.lazy(() => QuestionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QuestionUpdateWithWhereUniqueWithoutExamInputObjectSchema), z.lazy(() => QuestionUpdateWithWhereUniqueWithoutExamInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QuestionUpdateManyWithWhereWithoutExamInputObjectSchema), z.lazy(() => QuestionUpdateManyWithWhereWithoutExamInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QuestionScalarWhereInputObjectSchema), z.lazy(() => QuestionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QuestionUncheckedUpdateManyWithoutExamNestedInputObjectSchema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutExamNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutExamNestedInput>;
export const QuestionUncheckedUpdateManyWithoutExamNestedInputObjectZodSchema = makeSchema();
