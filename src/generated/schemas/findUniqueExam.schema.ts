import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamSelectObjectSchema as ExamSelectObjectSchema } from './objects/ExamSelect.schema';
import { ExamIncludeObjectSchema as ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';

export const ExamFindUniqueSchema: z.ZodType<Prisma.ExamFindUniqueArgs> = z.object({ select: ExamSelectObjectSchema.optional(), include: ExamIncludeObjectSchema.optional(), where: ExamWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExamFindUniqueArgs>;

export const ExamFindUniqueZodSchema = z.object({ select: ExamSelectObjectSchema.optional(), include: ExamIncludeObjectSchema.optional(), where: ExamWhereUniqueInputObjectSchema }).strict();