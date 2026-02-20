import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TenantSelectObjectSchema as TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantUpdateManyMutationInputObjectSchema as TenantUpdateManyMutationInputObjectSchema } from './objects/TenantUpdateManyMutationInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';

export const TenantUpdateManyAndReturnSchema: z.ZodType<Prisma.TenantUpdateManyAndReturnArgs> = z.object({ select: TenantSelectObjectSchema.optional(), data: TenantUpdateManyMutationInputObjectSchema, where: TenantWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantUpdateManyAndReturnArgs>;

export const TenantUpdateManyAndReturnZodSchema = z.object({ select: TenantSelectObjectSchema.optional(), data: TenantUpdateManyMutationInputObjectSchema, where: TenantWhereInputObjectSchema.optional() }).strict();