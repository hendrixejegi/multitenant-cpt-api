import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionSelectObjectSchema as QuestionSelectObjectSchema } from './objects/QuestionSelect.schema';
import { QuestionCreateManyInputObjectSchema as QuestionCreateManyInputObjectSchema } from './objects/QuestionCreateManyInput.schema';

export const QuestionCreateManyAndReturnSchema: z.ZodType<Prisma.QuestionCreateManyAndReturnArgs> = z.object({ select: QuestionSelectObjectSchema.optional(), data: z.union([ QuestionCreateManyInputObjectSchema, z.array(QuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.QuestionCreateManyAndReturnArgs>;

export const QuestionCreateManyAndReturnZodSchema = z.object({ select: QuestionSelectObjectSchema.optional(), data: z.union([ QuestionCreateManyInputObjectSchema, z.array(QuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();