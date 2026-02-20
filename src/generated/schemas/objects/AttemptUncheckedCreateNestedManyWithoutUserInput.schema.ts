import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptCreateWithoutUserInputObjectSchema as AttemptCreateWithoutUserInputObjectSchema } from './AttemptCreateWithoutUserInput.schema';
import { AttemptUncheckedCreateWithoutUserInputObjectSchema as AttemptUncheckedCreateWithoutUserInputObjectSchema } from './AttemptUncheckedCreateWithoutUserInput.schema';
import { AttemptCreateOrConnectWithoutUserInputObjectSchema as AttemptCreateOrConnectWithoutUserInputObjectSchema } from './AttemptCreateOrConnectWithoutUserInput.schema';
import { AttemptCreateManyUserInputEnvelopeObjectSchema as AttemptCreateManyUserInputEnvelopeObjectSchema } from './AttemptCreateManyUserInputEnvelope.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttemptCreateWithoutUserInputObjectSchema), z.lazy(() => AttemptCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AttemptUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AttemptUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AttemptCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AttemptCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AttemptCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AttemptWhereUniqueInputObjectSchema), z.lazy(() => AttemptWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AttemptUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AttemptUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUncheckedCreateNestedManyWithoutUserInput>;
export const AttemptUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
