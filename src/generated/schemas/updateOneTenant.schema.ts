import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantSelectObjectSchema as TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantIncludeObjectSchema as TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantUpdateInputObjectSchema as TenantUpdateInputObjectSchema } from './objects/TenantUpdateInput.schema';
import { TenantUncheckedUpdateInputObjectSchema as TenantUncheckedUpdateInputObjectSchema } from './objects/TenantUncheckedUpdateInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';

export const TenantUpdateOneSchema: z.ZodType<Prisma.TenantUpdateArgs> = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), data: z.union([TenantUpdateInputObjectSchema, TenantUncheckedUpdateInputObjectSchema]), where: TenantWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantUpdateArgs>;

export const TenantUpdateOneZodSchema = z.object({ select: TenantSelectObjectSchema.optional(), include: TenantIncludeObjectSchema.optional(), data: z.union([TenantUpdateInputObjectSchema, TenantUncheckedUpdateInputObjectSchema]), where: TenantWhereUniqueInputObjectSchema }).strict();