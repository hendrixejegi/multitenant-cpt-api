import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema';
import { AttemptUpdateWithoutUserInputObjectSchema as AttemptUpdateWithoutUserInputObjectSchema } from './AttemptUpdateWithoutUserInput.schema';
import { AttemptUncheckedUpdateWithoutUserInputObjectSchema as AttemptUncheckedUpdateWithoutUserInputObjectSchema } from './AttemptUncheckedUpdateWithoutUserInput.schema';
import { AttemptCreateWithoutUserInputObjectSchema as AttemptCreateWithoutUserInputObjectSchema } from './AttemptCreateWithoutUserInput.schema';
import { AttemptUncheckedCreateWithoutUserInputObjectSchema as AttemptUncheckedCreateWithoutUserInputObjectSchema } from './AttemptUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AttemptUpdateWithoutUserInputObjectSchema), z.lazy(() => AttemptUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AttemptCreateWithoutUserInputObjectSchema), z.lazy(() => AttemptUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AttemptUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AttemptUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUpsertWithWhereUniqueWithoutUserInput>;
export const AttemptUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
