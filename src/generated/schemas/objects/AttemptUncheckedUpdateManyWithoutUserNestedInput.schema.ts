import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptCreateWithoutUserInputObjectSchema as AttemptCreateWithoutUserInputObjectSchema } from './AttemptCreateWithoutUserInput.schema';
import { AttemptUncheckedCreateWithoutUserInputObjectSchema as AttemptUncheckedCreateWithoutUserInputObjectSchema } from './AttemptUncheckedCreateWithoutUserInput.schema';
import { AttemptCreateOrConnectWithoutUserInputObjectSchema as AttemptCreateOrConnectWithoutUserInputObjectSchema } from './AttemptCreateOrConnectWithoutUserInput.schema';
import { AttemptUpsertWithWhereUniqueWithoutUserInputObjectSchema as AttemptUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AttemptUpsertWithWhereUniqueWithoutUserInput.schema';
import { AttemptCreateManyUserInputEnvelopeObjectSchema as AttemptCreateManyUserInputEnvelopeObjectSchema } from './AttemptCreateManyUserInputEnvelope.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema';
import { AttemptUpdateWithWhereUniqueWithoutUserInputObjectSchema as AttemptUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AttemptUpdateWithWhereUniqueWithoutUserInput.schema';
import { AttemptUpdateManyWithWhereWithoutUserInputObjectSchema as AttemptUpdateManyWithWhereWithoutUserInputObjectSchema } from './AttemptUpdateManyWithWhereWithoutUserInput.schema';
import { AttemptScalarWhereInputObjectSchema as AttemptScalarWhereInputObjectSchema } from './AttemptScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttemptCreateWithoutUserInputObjectSchema), z.lazy(() => AttemptCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AttemptUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AttemptUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttemptCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AttemptCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AttemptUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AttemptUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttemptCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AttemptUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AttemptUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AttemptUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AttemptUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AttemptScalarWhereInputObjectSchema), z.lazy(() => AttemptScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AttemptUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AttemptUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUncheckedUpdateManyWithoutUserNestedInput>;
export const AttemptUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
