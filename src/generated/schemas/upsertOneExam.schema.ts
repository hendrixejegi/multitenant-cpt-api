import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamSelectObjectSchema as ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema as ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';
import { ExamCreateInputObjectSchema as ExamCreateInputObjectSchema } from './objects/ExamCreateInput.schema';
import { ExamUncheckedCreateInputObjectSchema as ExamUncheckedCreateInputObjectSchema } from './objects/ExamUncheckedCreateInput.schema';
import { ExamUpdateInputObjectSchema as ExamUpdateInputObjectSchema } from './objects/ExamUpdateInput.schema';
import { ExamUncheckedUpdateInputObjectSchema as ExamUncheckedUpdateInputObjectSchema } from './objects/ExamUncheckedUpdateInput.schema';

export const ExamUpsertOneSchema: z.ZodType<Prisma.ExamUpsertArgs> = z.object({ select: ExamSelectObjectSchema.optional(), include: ExamIncludeObjectSchema.optional(), where: ExamWhereUniqueInputObjectSchema, create: z.union([ ExamCreateInputObjectSchema, ExamUncheckedCreateInputObjectSchema ]), update: z.union([ ExamUpdateInputObjectSchema, ExamUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ExamUpsertArgs>;

export const ExamUpsertOneZodSchema = z.object({ select: ExamSelectObjectSchema.optional(), include: ExamIncludeObjectSchema.optional(), where: ExamWhereUniqueInputObjectSchema, create: z.union([ ExamCreateInputObjectSchema, ExamUncheckedCreateInputObjectSchema ]), update: z.union([ ExamUpdateInputObjectSchema, ExamUncheckedUpdateInputObjectSchema ]) }).strict();