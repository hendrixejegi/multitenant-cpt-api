import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantSelectObjectSchema as TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantCreateManyInputObjectSchema as TenantCreateManyInputObjectSchema } from './objects/TenantCreateManyInput.schema';

export const TenantCreateManyAndReturnSchema: z.ZodType<Prisma.TenantCreateManyAndReturnArgs> = z.object({ select: TenantSelectObjectSchema.optional(), data: z.union([ TenantCreateManyInputObjectSchema, z.array(TenantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TenantCreateManyAndReturnArgs>;

export const TenantCreateManyAndReturnZodSchema = z.object({ select: TenantSelectObjectSchema.optional(), data: z.union([ TenantCreateManyInputObjectSchema, z.array(TenantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();