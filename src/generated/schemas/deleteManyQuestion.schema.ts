import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionWhereInputObjectSchema as QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema';

export const QuestionDeleteManySchema: z.ZodType<Prisma.QuestionDeleteManyArgs> = z.object({ where: QuestionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.QuestionDeleteManyArgs>;

export const QuestionDeleteManyZodSchema = z.object({ where: QuestionWhereInputObjectSchema.optional() }).strict();