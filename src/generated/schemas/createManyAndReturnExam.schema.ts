import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamSelectObjectSchema as ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamCreateManyInputObjectSchema as ExamCreateManyInputObjectSchema } from './objects/ExamCreateManyInput.schema';

export const ExamCreateManyAndReturnSchema: z.ZodType<Prisma.ExamCreateManyAndReturnArgs> = z.object({ select: ExamSelectObjectSchema.optional(), data: z.union([ ExamCreateManyInputObjectSchema, z.array(ExamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ExamCreateManyAndReturnArgs>;

export const ExamCreateManyAndReturnZodSchema = z.object({ select: ExamSelectObjectSchema.optional(), data: z.union([ ExamCreateManyInputObjectSchema, z.array(ExamCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();