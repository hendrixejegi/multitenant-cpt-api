import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantSelectObjectSchema as TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantIncludeObjectSchema as TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantCreateInputObjectSchema as TenantCreateInputObjectSchema } from './objects/TenantCreateInput.schema';
import { TenantUncheckedCreateInputObjectSchema as TenantUncheckedCreateInputObjectSchema } from './objects/TenantUncheckedCreateInput.schema';
import { TenantUpdateInputObjectSchema as TenantUpdateInputObjectSchema } from './objects/TenantUpdateInput.schema';
import { TenantUncheckedUpdateInputObjectSchema as TenantUncheckedUpdateInputObjectSchema } from './objects/TenantUncheckedUpdateInput.schema';

export const TenantUpsertOneSchema: z.ZodType<Prisma.TenantUpsertArgs> = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), where: TenantWhereUniqueInputObjectSchema, create: z.union([ TenantCreateInputObjectSchema, TenantUncheckedCreateInputObjectSchema ]), update: z.union([ TenantUpdateInputObjectSchema, TenantUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TenantUpsertArgs>;

export const TenantUpsertOneZodSchema = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), where: TenantWhereUniqueInputObjectSchema, create: z.union([ TenantCreateInputObjectSchema, TenantUncheckedCreateInputObjectSchema ]), update: z.union([ TenantUpdateInputObjectSchema, TenantUncheckedUpdateInputObjectSchema ]) }).strict();