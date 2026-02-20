import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamSelectObjectSchema as ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema as ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamCreateInputObjectSchema as ExamCreateInputObjectSchema } from './objects/ExamCreateInput.schema';
import { ExamUncheckedCreateInputObjectSchema as ExamUncheckedCreateInputObjectSchema } from './objects/ExamUncheckedCreateInput.schema';

export const ExamCreateOneSchema: z.ZodType<Prisma.ExamCreateArgs> = z.object({ select: ExamSelectObjectSchema.optional(), include: ExamIncludeObjectSchema.optional(), data: z.union([ExamCreateInputObjectSchema, ExamUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ExamCreateArgs>;

export const ExamCreateOneZodSchema = z.object({ select: ExamSelectObjectSchema.optional(), include: ExamIncludeObjectSchema.optional(), data: z.union([ExamCreateInputObjectSchema, ExamUncheckedCreateInputObjectSchema]) }).strict();