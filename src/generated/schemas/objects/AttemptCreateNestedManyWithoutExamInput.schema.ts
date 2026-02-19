import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptCreateWithoutExamInputObjectSchema as AttemptCreateWithoutExamInputObjectSchema } from './AttemptCreateWithoutExamInput.schema';
import { AttemptUncheckedCreateWithoutExamInputObjectSchema as AttemptUncheckedCreateWithoutExamInputObjectSchema } from './AttemptUncheckedCreateWithoutExamInput.schema';
import { AttemptCreateOrConnectWithoutExamInputObjectSchema as AttemptCreateOrConnectWithoutExamInputObjectSchema } from './AttemptCreateOrConnectWithoutExamInput.schema';
import { AttemptCreateManyExamInputEnvelopeObjectSchema as AttemptCreateManyExamInputEnvelopeObjectSchema } from './AttemptCreateManyExamInputEnvelope.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttemptCreateWithoutExamInputObjectSchema), z.lazy(() => AttemptCreateWithoutExamInputObjectSchema).array(), z.lazy(() => AttemptUncheckedCreateWithoutExamInputObjectSchema), z.lazy(() => AttemptUncheckedCreateWithoutExamInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttemptCreateOrConnectWithoutExamInputObjectSchema), z.lazy(() => AttemptCreateOrConnectWithoutExamInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttemptCreateManyExamInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AttemptCreateNestedManyWithoutExamInputObjectSchema: z.ZodType<Prisma.AttemptCreateNestedManyWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptCreateNestedManyWithoutExamInput>;
export const AttemptCreateNestedManyWithoutExamInputObjectZodSchema = makeSchema();
