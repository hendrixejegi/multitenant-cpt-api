import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptCreateWithoutExamInputObjectSchema as AttemptCreateWithoutExamInputObjectSchema } from './AttemptCreateWithoutExamInput.schema';
import { AttemptUncheckedCreateWithoutExamInputObjectSchema as AttemptUncheckedCreateWithoutExamInputObjectSchema } from './AttemptUncheckedCreateWithoutExamInput.schema';
import { AttemptCreateOrConnectWithoutExamInputObjectSchema as AttemptCreateOrConnectWithoutExamInputObjectSchema } from './AttemptCreateOrConnectWithoutExamInput.schema';
import { AttemptUpsertWithWhereUniqueWithoutExamInputObjectSchema as AttemptUpsertWithWhereUniqueWithoutExamInputObjectSchema } from './AttemptUpsertWithWhereUniqueWithoutExamInput.schema';
import { AttemptCreateManyExamInputEnvelopeObjectSchema as AttemptCreateManyExamInputEnvelopeObjectSchema } from './AttemptCreateManyExamInputEnvelope.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema';
import { AttemptUpdateWithWhereUniqueWithoutExamInputObjectSchema as AttemptUpdateWithWhereUniqueWithoutExamInputObjectSchema } from './AttemptUpdateWithWhereUniqueWithoutExamInput.schema';
import { AttemptUpdateManyWithWhereWithoutExamInputObjectSchema as AttemptUpdateManyWithWhereWithoutExamInputObjectSchema } from './AttemptUpdateManyWithWhereWithoutExamInput.schema';
import { AttemptScalarWhereInputObjectSchema as AttemptScalarWhereInputObjectSchema } from './AttemptScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttemptCreateWithoutExamInputObjectSchema), z.lazy(() => AttemptCreateWithoutExamInputObjectSchema).array(), z.lazy(() => AttemptUncheckedCreateWithoutExamInputObjectSchema), z.lazy(() => AttemptUncheckedCreateWithoutExamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttemptCreateOrConnectWithoutExamInputObjectSchema), z.lazy(() => AttemptCreateOrConnectWithoutExamInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AttemptUpsertWithWhereUniqueWithoutExamInputObjectSchema), z.lazy(() => AttemptUpsertWithWhereUniqueWithoutExamInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttemptCreateManyExamInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AttemptUpdateWithWhereUniqueWithoutExamInputObjectSchema), z.lazy(() => AttemptUpdateWithWhereUniqueWithoutExamInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AttemptUpdateManyWithWhereWithoutExamInputObjectSchema), z.lazy(() => AttemptUpdateManyWithWhereWithoutExamInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AttemptScalarWhereInputObjectSchema), z.lazy(() => AttemptScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AttemptUncheckedUpdateManyWithoutExamNestedInputObjectSchema: z.ZodType<Prisma.AttemptUncheckedUpdateManyWithoutExamNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUncheckedUpdateManyWithoutExamNestedInput>;
export const AttemptUncheckedUpdateManyWithoutExamNestedInputObjectZodSchema = makeSchema();
