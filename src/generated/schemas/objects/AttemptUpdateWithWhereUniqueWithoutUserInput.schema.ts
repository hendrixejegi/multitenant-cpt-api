import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema';
import { AttemptUpdateWithoutUserInputObjectSchema as AttemptUpdateWithoutUserInputObjectSchema } from './AttemptUpdateWithoutUserInput.schema';
import { AttemptUncheckedUpdateWithoutUserInputObjectSchema as AttemptUncheckedUpdateWithoutUserInputObjectSchema } from './AttemptUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AttemptUpdateWithoutUserInputObjectSchema), z.lazy(() => AttemptUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AttemptUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AttemptUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUpdateWithWhereUniqueWithoutUserInput>;
export const AttemptUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
