import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptScalarWhereInputObjectSchema as AttemptScalarWhereInputObjectSchema } from './AttemptScalarWhereInput.schema';
import { AttemptUpdateManyMutationInputObjectSchema as AttemptUpdateManyMutationInputObjectSchema } from './AttemptUpdateManyMutationInput.schema';
import { AttemptUncheckedUpdateManyWithoutUserInputObjectSchema as AttemptUncheckedUpdateManyWithoutUserInputObjectSchema } from './AttemptUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AttemptUpdateManyMutationInputObjectSchema), z.lazy(() => AttemptUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AttemptUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AttemptUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUpdateManyWithWhereWithoutUserInput>;
export const AttemptUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
