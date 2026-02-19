import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantSelectObjectSchema as TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantIncludeObjectSchema as TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantCreateInputObjectSchema as TenantCreateInputObjectSchema } from './objects/TenantCreateInput.schema';
import { TenantUncheckedCreateInputObjectSchema as TenantUncheckedCreateInputObjectSchema } from './objects/TenantUncheckedCreateInput.schema';

export const TenantCreateOneSchema: z.ZodType<Prisma.TenantCreateArgs> = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), data: z.union([TenantCreateInputObjectSchema, TenantUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TenantCreateArgs>;

export const TenantCreateOneZodSchema = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), data: z.union([TenantCreateInputObjectSchema, TenantUncheckedCreateInputObjectSchema]) }).strict();