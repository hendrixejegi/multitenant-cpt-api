import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema';
import { AttemptUpdateWithoutExamInputObjectSchema as AttemptUpdateWithoutExamInputObjectSchema } from './AttemptUpdateWithoutExamInput.schema';
import { AttemptUncheckedUpdateWithoutExamInputObjectSchema as AttemptUncheckedUpdateWithoutExamInputObjectSchema } from './AttemptUncheckedUpdateWithoutExamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AttemptUpdateWithoutExamInputObjectSchema), z.lazy(() => AttemptUncheckedUpdateWithoutExamInputObjectSchema)])
}).strict();
export const AttemptUpdateWithWhereUniqueWithoutExamInputObjectSchema: z.ZodType<Prisma.AttemptUpdateWithWhereUniqueWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUpdateWithWhereUniqueWithoutExamInput>;
export const AttemptUpdateWithWhereUniqueWithoutExamInputObjectZodSchema = makeSchema();
