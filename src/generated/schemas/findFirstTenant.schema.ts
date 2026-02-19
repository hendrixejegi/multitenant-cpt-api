import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantIncludeObjectSchema as TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './objects/TenantOrderByWithRelationInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantScalarFieldEnumSchema } from './enums/TenantScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantFindFirstSelectSchema: z.ZodType<Prisma.TenantSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    created_at: z.boolean().optional(),
    users: z.boolean().optional(),
    exams: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantSelect>;

export const TenantFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    created_at: z.boolean().optional(),
    users: z.boolean().optional(),
    exams: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TenantFindFirstSchema: z.ZodType<Prisma.TenantFindFirstArgs> = z.object({ select: TenantFindFirstSelectSchema.optional(), include: z.lazy(() => TenantIncludeObjectSchema.optional()), orderBy: z.union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantWhereInputObjectSchema.optional(), cursor: TenantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantScalarFieldEnumSchema, TenantScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantFindFirstArgs>;

export const TenantFindFirstZodSchema = z.object({ select: TenantFindFirstSelectSchema.optional(), include: z.lazy(() => TenantIncludeObjectSchema.optional()), orderBy: z.union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantWhereInputObjectSchema.optional(), cursor: TenantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantScalarFieldEnumSchema, TenantScalarFieldEnumSchema.array()]).optional() }).strict();