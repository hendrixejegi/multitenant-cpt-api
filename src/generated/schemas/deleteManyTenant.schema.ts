import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';

export const TenantDeleteManySchema: z.ZodType<Prisma.TenantDeleteManyArgs> = z.object({ where: TenantWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantDeleteManyArgs>;

export const TenantDeleteManyZodSchema = z.object({ where: TenantWhereInputObjectSchema.optional() }).strict();