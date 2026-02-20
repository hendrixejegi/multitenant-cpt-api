import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamSelectObjectSchema as ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema as ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamUpdateInputObjectSchema as ExamUpdateInputObjectSchema } from './objects/ExamUpdateInput.schema';
import { ExamUncheckedUpdateInputObjectSchema as ExamUncheckedUpdateInputObjectSchema } from './objects/ExamUncheckedUpdateInput.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';

export const ExamUpdateOneSchema: z.ZodType<Prisma.ExamUpdateArgs> = z.object({ select: ExamSelectObjectSchema.optional(), include: ExamIncludeObjectSchema.optional(), data: z.union([ExamUpdateInputObjectSchema, ExamUncheckedUpdateInputObjectSchema]), where: ExamWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExamUpdateArgs>;

export const ExamUpdateOneZodSchema = z.object({ select: ExamSelectObjectSchema.optional(), include: ExamIncludeObjectSchema.optional(), data: z.union([ExamUpdateInputObjectSchema, ExamUncheckedUpdateInputObjectSchema]), where: ExamWhereUniqueInputObjectSchema }).strict();