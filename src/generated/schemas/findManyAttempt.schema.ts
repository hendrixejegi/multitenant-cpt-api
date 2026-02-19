import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptIncludeObjectSchema as AttemptIncludeObjectSchema } from './objects/AttemptInclude.schema';
import { AttemptOrderByWithRelationInputObjectSchema as AttemptOrderByWithRelationInputObjectSchema } from './objects/AttemptOrderByWithRelationInput.schema';
import { AttemptWhereInputObjectSchema as AttemptWhereInputObjectSchema } from './objects/AttemptWhereInput.schema';
import { AttemptWhereUniqueInputObjectSchema as AttemptWhereUniqueInputObjectSchema } from './objects/AttemptWhereUniqueInput.schema';
import { AttemptScalarFieldEnumSchema } from './enums/AttemptScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AttemptFindManySelectSchema: z.ZodType<Prisma.AttemptSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    exam_id: z.boolean().optional(),
    started_at: z.boolean().optional(),
    submitted_at: z.boolean().optional(),
    correct_answers: z.boolean().optional(),
    wrong_answers: z.boolean().optional(),
    status: z.boolean().optional(),
    score: z.boolean().optional(),
    created_at: z.boolean().optional(),
    exam: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AttemptSelect>;

export const AttemptFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    exam_id: z.boolean().optional(),
    started_at: z.boolean().optional(),
    submitted_at: z.boolean().optional(),
    correct_answers: z.boolean().optional(),
    wrong_answers: z.boolean().optional(),
    status: z.boolean().optional(),
    score: z.boolean().optional(),
    created_at: z.boolean().optional(),
    exam: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const AttemptFindManySchema: z.ZodType<Prisma.AttemptFindManyArgs> = z.object({ select: AttemptFindManySelectSchema.optional(), include: z.lazy(() => AttemptIncludeObjectSchema.optional()), orderBy: z.union([AttemptOrderByWithRelationInputObjectSchema, AttemptOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttemptWhereInputObjectSchema.optional(), cursor: AttemptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttemptScalarFieldEnumSchema, AttemptScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AttemptFindManyArgs>;

export const AttemptFindManyZodSchema = z.object({ select: AttemptFindManySelectSchema.optional(), include: z.lazy(() => AttemptIncludeObjectSchema.optional()), orderBy: z.union([AttemptOrderByWithRelationInputObjectSchema, AttemptOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttemptWhereInputObjectSchema.optional(), cursor: AttemptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AttemptScalarFieldEnumSchema, AttemptScalarFieldEnumSchema.array()]).optional() }).strict();