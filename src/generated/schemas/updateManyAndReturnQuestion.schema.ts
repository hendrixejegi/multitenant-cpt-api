import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionSelectObjectSchema as QuestionSelectObjectSchema } from './objects/QuestionSelect.schema';
import { QuestionUpdateManyMutationInputObjectSchema as QuestionUpdateManyMutationInputObjectSchema } from './objects/QuestionUpdateManyMutationInput.schema';
import { QuestionWhereInputObjectSchema as QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema';

export const QuestionUpdateManyAndReturnSchema: z.ZodType<Prisma.QuestionUpdateManyAndReturnArgs> = z.object({ select: QuestionSelectObjectSchema.optional(), data: QuestionUpdateManyMutationInputObjectSchema, where: QuestionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuestionUpdateManyAndReturnArgs>;

export const QuestionUpdateManyAndReturnZodSchema = z.object({ select: QuestionSelectObjectSchema.optional(), data: QuestionUpdateManyMutationInputObjectSchema, where: QuestionWhereInputObjectSchema.optional() }).strict();