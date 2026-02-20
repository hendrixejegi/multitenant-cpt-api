import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamUpdateManyMutationInputObjectSchema as ExamUpdateManyMutationInputObjectSchema } from './objects/ExamUpdateManyMutationInput.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';

export const ExamUpdateManySchema: z.ZodType<Prisma.ExamUpdateManyArgs> = z.object({ data: ExamUpdateManyMutationInputObjectSchema, where: ExamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExamUpdateManyArgs>;

export const ExamUpdateManyZodSchema = z.object({ data: ExamUpdateManyMutationInputObjectSchema, where: ExamWhereInputObjectSchema.optional() }).strict();