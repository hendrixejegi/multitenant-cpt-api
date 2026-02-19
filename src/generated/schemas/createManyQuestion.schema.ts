import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionCreateManyInputObjectSchema as QuestionCreateManyInputObjectSchema } from './objects/QuestionCreateManyInput.schema';

export const QuestionCreateManySchema: z.ZodType<Prisma.QuestionCreateManyArgs> = z.object({ data: z.union([ QuestionCreateManyInputObjectSchema, z.array(QuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.QuestionCreateManyArgs>;

export const QuestionCreateManyZodSchema = z.object({ data: z.union([ QuestionCreateManyInputObjectSchema, z.array(QuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();