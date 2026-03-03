import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema';
import { AttemptCreateWithoutUserInputObjectSchema as AttemptCreateWithoutUserInputObjectSchema } from './AttemptCreateWithoutUserInput.schema';
import { AttemptUncheckedCreateWithoutUserInputObjectSchema as AttemptUncheckedCreateWithoutUserInputObjectSchema } from './AttemptUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AttemptCreateWithoutUserInputObjectSchema), z.lazy(() => AttemptUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AttemptCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AttemptCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptCreateOrConnectWithoutUserInput>;
export const AttemptCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
