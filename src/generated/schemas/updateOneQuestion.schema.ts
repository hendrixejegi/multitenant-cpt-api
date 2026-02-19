import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionSelectObjectSchema as QuestionSelectObjectSchema } from './objects/QuestionSelect.schema';
import { QuestionIncludeObjectSchema as QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema';
import { QuestionUpdateInputObjectSchema as QuestionUpdateInputObjectSchema } from './objects/QuestionUpdateInput.schema';
import { QuestionUncheckedUpdateInputObjectSchema as QuestionUncheckedUpdateInputObjectSchema } from './objects/QuestionUncheckedUpdateInput.schema';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema';

export const QuestionUpdateOneSchema: z.ZodType<Prisma.QuestionUpdateArgs> = z.object({ select: QuestionSelectObjectSchema.optional(), include: QuestionIncludeObjectSchema.optional(), data: z.union([QuestionUpdateInputObjectSchema, QuestionUncheckedUpdateInputObjectSchema]), where: QuestionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuestionUpdateArgs>;

export const QuestionUpdateOneZodSchema = z.object({ select: QuestionSelectObjectSchema.optional(), include: QuestionIncludeObjectSchema.optional(), data: z.union([QuestionUpdateInputObjectSchema, QuestionUncheckedUpdateInputObjectSchema]), where: QuestionWhereUniqueInputObjectSchema }).strict();