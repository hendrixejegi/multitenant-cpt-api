import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamCreateManyInputObjectSchema as ExamCreateManyInputObjectSchema } from './objects/ExamCreateManyInput.schema';

export const ExamCreateManySchema: z.ZodType<Prisma.ExamCreateManyArgs> = z.object({ data: z.union([ ExamCreateManyInputObjectSchema, z.array(ExamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ExamCreateManyArgs>;

export const ExamCreateManyZodSchema = z.object({ data: z.union([ ExamCreateManyInputObjectSchema, z.array(ExamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();