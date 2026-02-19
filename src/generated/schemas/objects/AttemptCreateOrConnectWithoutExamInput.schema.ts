import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema';
import { AttemptCreateWithoutExamInputObjectSchema as AttemptCreateWithoutExamInputObjectSchema } from './AttemptCreateWithoutExamInput.schema';
import { AttemptUncheckedCreateWithoutExamInputObjectSchema as AttemptUncheckedCreateWithoutExamInputObjectSchema } from './AttemptUncheckedCreateWithoutExamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AttemptCreateWithoutExamInputObjectSchema), z.lazy(() => AttemptUncheckedCreateWithoutExamInputObjectSchema)])
}).strict();
export const AttemptCreateOrConnectWithoutExamInputObjectSchema: z.ZodType<Prisma.AttemptCreateOrConnectWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptCreateOrConnectWithoutExamInput>;
export const AttemptCreateOrConnectWithoutExamInputObjectZodSchema = makeSchema();
