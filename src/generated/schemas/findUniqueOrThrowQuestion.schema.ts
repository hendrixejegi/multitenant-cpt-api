import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionSelectObjectSchema as QuestionSelectObjectSchema } from './objects/QuestionSelect.schema';
import { QuestionIncludeObjectSchema as QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema';

export const QuestionFindUniqueOrThrowSchema: z.ZodType<Prisma.QuestionFindUniqueOrThrowArgs> = z.object({ select: QuestionSelectObjectSchema.optional(), include: QuestionIncludeObjectSchema.optional(), where: QuestionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.QuestionFindUniqueOrThrowArgs>;

export const QuestionFindUniqueOrThrowZodSchema = z.object({ select: QuestionSelectObjectSchema.optional(), include: QuestionIncludeObjectSchema.optional(), where: QuestionWhereUniqueInputObjectSchema }).strict();