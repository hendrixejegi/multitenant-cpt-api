import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuestionIncludeObjectSchema as QuestionIncludeObjectSchema } from './objects/QuestionInclude.schema';
import { QuestionOrderByWithRelationInputObjectSchema as QuestionOrderByWithRelationInputObjectSchema } from './objects/QuestionOrderByWithRelationInput.schema';
import { QuestionWhereInputObjectSchema as QuestionWhereInputObjectSchema } from './objects/QuestionWhereInput.schema';
import { QuestionWhereUniqueInputObjectSchema as QuestionWhereUniqueInputObjectSchema } from './objects/QuestionWhereUniqueInput.schema';
import { QuestionScalarFieldEnumSchema } from './enums/QuestionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QuestionFindManySelectSchema: z.ZodType<Prisma.QuestionSelect> = z.object({
    id: z.boolean().optional(),
    exam_id: z.boolean().optional(),
    text: z.boolean().optional(),
    options: z.boolean().optional(),
    correct_answer: z.boolean().optional(),
    created_at: z.boolean().optional(),
    exam: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.QuestionSelect>;

export const QuestionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    exam_id: z.boolean().optional(),
    text: z.boolean().optional(),
    options: z.boolean().optional(),
    correct_answer: z.boolean().optional(),
    created_at: z.boolean().optional(),
    exam: z.boolean().optional()
  }).strict();

export const QuestionFindManySchema: z.ZodType<Prisma.QuestionFindManyArgs> = z.object({ select: QuestionFindManySelectSchema.optional(), include: z.lazy(() => QuestionIncludeObjectSchema.optional()), orderBy: z.union([QuestionOrderByWithRelationInputObjectSchema, QuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionWhereInputObjectSchema.optional(), cursor: QuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuestionScalarFieldEnumSchema, QuestionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.QuestionFindManyArgs>;

export const QuestionFindManyZodSchema = z.object({ select: QuestionFindManySelectSchema.optional(), include: z.lazy(() => QuestionIncludeObjectSchema.optional()), orderBy: z.union([QuestionOrderByWithRelationInputObjectSchema, QuestionOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuestionWhereInputObjectSchema.optional(), cursor: QuestionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuestionScalarFieldEnumSchema, QuestionScalarFieldEnumSchema.array()]).optional() }).strict();