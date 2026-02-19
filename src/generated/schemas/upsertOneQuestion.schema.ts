import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionSelectObjectSchema as QuestionSelectObjectSchema } from './objects/QuestionSelect.schema';
import { QuestionIncludeObjectSchema as QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema';
import { QuestionCreateInputObjectSchema as QuestionCreateInputObjectSchema } from './objects/QuestionCreateInput.schema';
import { QuestionUncheckedCreateInputObjectSchema as QuestionUncheckedCreateInputObjectSchema } from './objects/QuestionUncheckedCreateInput.schema';
import { QuestionUpdateInputObjectSchema as QuestionUpdateInputObjectSchema } from './objects/QuestionUpdateInput.schema';
import { QuestionUncheckedUpdateInputObjectSchema as QuestionUncheckedUpdateInputObjectSchema } from './objects/QuestionUncheckedUpdateInput.schema';

export const QuestionUpsertOneSchema: z.ZodType<Prisma.QuestionUpsertArgs> = z.object({ select: QuestionSelectObjectSchema.optional(), include: QuestionIncludeObjectSchema.optional(), where: QuestionWhereUniqueInputObjectSchema, create: z.union([ QuestionCreateInputObjectSchema, QuestionUncheckedCreateInputObjectSchema ]), update: z.union([ QuestionUpdateInputObjectSchema, QuestionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.QuestionUpsertArgs>;

export const QuestionUpsertOneZodSchema = z.object({ select: QuestionSelectObjectSchema.optional(), include: QuestionIncludeObjectSchema.optional(), where: QuestionWhereUniqueInputObjectSchema, create: z.union([ QuestionCreateInputObjectSchema, QuestionUncheckedCreateInputObjectSchema ]), update: z.union([ QuestionUpdateInputObjectSchema, QuestionUncheckedUpdateInputObjectSchema ]) }).strict();