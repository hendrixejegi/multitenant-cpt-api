import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';

export const ExamDeleteManySchema: z.ZodType<Prisma.ExamDeleteManyArgs> = z.object({ where: ExamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExamDeleteManyArgs>;

export const ExamDeleteManyZodSchema = z.object({ where: ExamWhereInputObjectSchema.optional() }).strict();