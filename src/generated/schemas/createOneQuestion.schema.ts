import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionSelectObjectSchema as QuestionSelectObjectSchema } from './objects/QuestionSelect.schema';
import { QuestionIncludeObjectSchema as QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema';
import { QuestionCreateInputObjectSchema as QuestionCreateInputObjectSchema } from './objects/QuestionCreateInput.schema';
import { QuestionUncheckedCreateInputObjectSchema as QuestionUncheckedCreateInputObjectSchema } from './objects/QuestionUncheckedCreateInput.schema';

export const QuestionCreateOneSchema: z.ZodType<Prisma.QuestionCreateArgs> = z.object({ select: QuestionSelectObjectSchema.optional(), include: QuestionIncludeObjectSchema.optional(), data: z.union([QuestionCreateInputObjectSchema, QuestionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.QuestionCreateArgs>;

export const QuestionCreateOneZodSchema = z.object({ select: QuestionSelectObjectSchema.optional(), include: QuestionIncludeObjectSchema.optional(), data: z.union([QuestionCreateInputObjectSchema, QuestionUncheckedCreateInputObjectSchema]) }).strict();