import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { QuestionScalarWhereInputObjectSchema as QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema';
import { QuestionUpdateManyMutationInputObjectSchema as QuestionUpdateManyMutationInputObjectSchema } from './QuestionUpdateManyMutationInput.schema';
import { QuestionUncheckedUpdateManyWithoutExamInputObjectSchema as QuestionUncheckedUpdateManyWithoutExamInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutExamInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QuestionUpdateManyMutationInputObjectSchema), z.lazy(() => QuestionUncheckedUpdateManyWithoutExamInputObjectSchema)])
}).strict();
export const QuestionUpdateManyWithWhereWithoutExamInputObjectSchema: z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionUpdateManyWithWhereWithoutExamInput>;
export const QuestionUpdateManyWithWhereWithoutExamInputObjectZodSchema = makeSchema();
