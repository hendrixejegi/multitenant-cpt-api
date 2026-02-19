import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';
import { TenantOrderByWithAggregationInputObjectSchema as TenantOrderByWithAggregationInputObjectSchema } from './objects/TenantOrderByWithAggregationInput.schema';
import { TenantScalarWhereWithAggregatesInputObjectSchema as TenantScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantScalarWhereWithAggregatesInput.schema';
import { TenantScalarFieldEnumSchema } from './enums/TenantScalarFieldEnum.schema';
import { TenantCountAggregateInputObjectSchema as TenantCountAggregateInputObjectSchema } from './objects/TenantCountAggregateInput.schema';
import { TenantMinAggregateInputObjectSchema as TenantMinAggregateInputObjectSchema } from './objects/TenantMinAggregateInput.schema';
import { TenantMaxAggregateInputObjectSchema as TenantMaxAggregateInputObjectSchema } from './objects/TenantMaxAggregateInput.schema';

export const TenantGroupBySchema: z.ZodType<Prisma.TenantGroupByArgs> = z.object({ where: TenantWhereInputObjectSchema.optional(), orderBy: z.union([TenantOrderByWithAggregationInputObjectSchema, TenantOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantCountAggregateInputObjectSchema ]).optional(), _min: TenantMinAggregateInputObjectSchema.optional(), _max: TenantMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantGroupByArgs>;

export const TenantGroupByZodSchema = z.object({ where: TenantWhereInputObjectSchema.optional(), orderBy: z.union([TenantOrderByWithAggregationInputObjectSchema, TenantOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantCountAggregateInputObjectSchema ]).optional(), _min: TenantMinAggregateInputObjectSchema.optional(), _max: TenantMaxAggregateInputObjectSchema.optional() }).strict();