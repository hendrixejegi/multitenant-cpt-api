import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamSelectObjectSchema as ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamUpdateManyMutationInputObjectSchema as ExamUpdateManyMutationInputObjectSchema } from './objects/ExamUpdateManyMutationInput.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';

export const ExamUpdateManyAndReturnSchema: z.ZodType<Prisma.ExamUpdateManyAndReturnArgs> = z.object({ select: ExamSelectObjectSchema.optional(), data: ExamUpdateManyMutationInputObjectSchema, where: ExamWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExamUpdateManyAndReturnArgs>;

export const ExamUpdateManyAndReturnZodSchema = z.object({ select: ExamSelectObjectSchema.optional(), data: ExamUpdateManyMutationInputObjectSchema, where: ExamWhereInputObjectSchema.optional() }).strict();