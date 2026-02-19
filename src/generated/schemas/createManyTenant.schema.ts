import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantCreateManyInputObjectSchema as TenantCreateManyInputObjectSchema } from './objects/TenantCreateManyInput.schema';

export const TenantCreateManySchema: z.ZodType<Prisma.TenantCreateManyArgs> = z.object({ data: z.union([ TenantCreateManyInputObjectSchema, z.array(TenantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TenantCreateManyArgs>;

export const TenantCreateManyZodSchema = z.object({ data: z.union([ TenantCreateManyInputObjectSchema, z.array(TenantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();