import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptScalarWhereInputObjectSchema as AttemptScalarWhereInputObjectSchema } from './AttemptScalarWhereInput.schema';
import { AttemptUpdateManyMutationInputObjectSchema as AttemptUpdateManyMutationInputObjectSchema } from './AttemptUpdateManyMutationInput.schema';
import { AttemptUncheckedUpdateManyWithoutExamInputObjectSchema as AttemptUncheckedUpdateManyWithoutExamInputObjectSchema } from './AttemptUncheckedUpdateManyWithoutExamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AttemptUpdateManyMutationInputObjectSchema), z.lazy(() => AttemptUncheckedUpdateManyWithoutExamInputObjectSchema)])
}).strict();
export const AttemptUpdateManyWithWhereWithoutExamInputObjectSchema: z.ZodType<Prisma.AttemptUpdateManyWithWhereWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUpdateManyWithWhereWithoutExamInput>;
export const AttemptUpdateManyWithWhereWithoutExamInputObjectZodSchema = makeSchema();
