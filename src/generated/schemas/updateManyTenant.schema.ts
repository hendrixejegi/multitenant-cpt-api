import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantUpdateManyMutationInputObjectSchema as TenantUpdateManyMutationInputObjectSchema } from './objects/TenantUpdateManyMutationInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';

export const TenantUpdateManySchema: z.ZodType<Prisma.TenantUpdateManyArgs> = z.object({ data: TenantUpdateManyMutationInputObjectSchema, where: TenantWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantUpdateManyArgs>;

export const TenantUpdateManyZodSchema = z.object({ data: TenantUpdateManyMutationInputObjectSchema, where: TenantWhereInputObjectSchema.optional() }).strict();