import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './objects/TenantOrderByWithRelationInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantCountAggregateInputObjectSchema as TenantCountAggregateInputObjectSchema } from './objects/TenantCountAggregateInput.schema';
import { TenantMinAggregateInputObjectSchema as TenantMinAggregateInputObjectSchema } from './objects/TenantMinAggregateInput.schema';
import { TenantMaxAggregateInputObjectSchema as TenantMaxAggregateInputObjectSchema } from './objects/TenantMaxAggregateInput.schema';

export const TenantAggregateSchema: z.ZodType<Prisma.TenantAggregateArgs> = z.object({ orderBy: z.union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantWhereInputObjectSchema.optional(), cursor: TenantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantCountAggregateInputObjectSchema ]).optional(), _min: TenantMinAggregateInputObjectSchema.optional(), _max: TenantMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantAggregateArgs>;

export const TenantAggregateZodSchema = z.object({ orderBy: z.union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantWhereInputObjectSchema.optional(), cursor: TenantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantCountAggregateInputObjectSchema ]).optional(), _min: TenantMinAggregateInputObjectSchema.optional(), _max: TenantMaxAggregateInputObjectSchema.optional() }).strict();