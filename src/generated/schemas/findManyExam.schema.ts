import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamIncludeObjectSchema as ExamIncludeObjectSchema } from './objects/ExamInclude.schema';
import { ExamOrderByWithRelationInputObjectSchema as ExamOrderByWithRelationInputObjectSchema } from './objects/ExamOrderByWithRelationInput.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';
import { ExamScalarFieldEnumSchema } from './enums/ExamScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExamFindManySelectSchema: z.ZodType<Prisma.ExamSelect> = z.object({
    id: z.boolean().optional(),
    tenant_id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    duration_minutes: z.boolean().optional(),
    code: z.boolean().optional(),
    is_published: z.boolean().optional(),
    created_at: z.boolean().optional(),
    questions: z.boolean().optional(),
    attempts: z.boolean().optional(),
    tenant: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ExamSelect>;

export const ExamFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenant_id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    duration_minutes: z.boolean().optional(),
    code: z.boolean().optional(),
    is_published: z.boolean().optional(),
    created_at: z.boolean().optional(),
    questions: z.boolean().optional(),
    attempts: z.boolean().optional(),
    tenant: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ExamFindManySchema: z.ZodType<Prisma.ExamFindManyArgs> = z.object({ select: ExamFindManySelectSchema.optional(), include: z.lazy(() => ExamIncludeObjectSchema.optional()), orderBy: z.union([ExamOrderByWithRelationInputObjectSchema, ExamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExamWhereInputObjectSchema.optional(), cursor: ExamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExamScalarFieldEnumSchema, ExamScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ExamFindManyArgs>;

export const ExamFindManyZodSchema = z.object({ select: ExamFindManySelectSchema.optional(), include: z.lazy(() => ExamIncludeObjectSchema.optional()), orderBy: z.union([ExamOrderByWithRelationInputObjectSchema, ExamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExamWhereInputObjectSchema.optional(), cursor: ExamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExamScalarFieldEnumSchema, ExamScalarFieldEnumSchema.array()]).optional() }).strict();