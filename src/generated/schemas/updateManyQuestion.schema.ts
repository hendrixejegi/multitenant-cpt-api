import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionUpdateManyMutationInputObjectSchema as QuestionUpdateManyMutationInputObjectSchema } from './objects/QuestionUpdateManyMutationInput.schema';
import { QuestionWhereInputObjectSchema as QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema';

export const QuestionUpdateManySchema: z.ZodType<Prisma.QuestionUpdateManyArgs> = z.object({ data: QuestionUpdateManyMutationInputObjectSchema, where: QuestionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuestionUpdateManyArgs>;

export const QuestionUpdateManyZodSchema = z.object({ data: QuestionUpdateManyMutationInputObjectSchema, where: QuestionWhereInputObjectSchema.optional() }).strict();