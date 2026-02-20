import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './AttemptWhereUniqueInput.schema';
import { AttemptUpdateWithoutExamInputObjectSchema as AttemptUpdateWithoutExamInputObjectSchema } from './AttemptUpdateWithoutExamInput.schema';
import { AttemptUncheckedUpdateWithoutExamInputObjectSchema as AttemptUncheckedUpdateWithoutExamInputObjectSchema } from './AttemptUncheckedUpdateWithoutExamInput.schema';
import { AttemptCreateWithoutExamInputObjectSchema as AttemptCreateWithoutExamInputObjectSchema } from './AttemptCreateWithoutExamInput.schema';
import { AttemptUncheckedCreateWithoutExamInputObjectSchema as AttemptUncheckedCreateWithoutExamInputObjectSchema } from './AttemptUncheckedCreateWithoutExamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AttemptUpdateWithoutExamInputObjectSchema), z.lazy(() => AttemptUncheckedUpdateWithoutExamInputObjectSchema)]),
  create: z.union([z.lazy(() => AttemptCreateWithoutExamInputObjectSchema), z.lazy(() => AttemptUncheckedCreateWithoutExamInputObjectSchema)])
}).strict();
export const AttemptUpsertWithWhereUniqueWithoutExamInputObjectSchema: z.ZodType<Prisma.AttemptUpsertWithWhereUniqueWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUpsertWithWhereUniqueWithoutExamInput>;
export const AttemptUpsertWithWhereUniqueWithoutExamInputObjectZodSchema = makeSchema();
