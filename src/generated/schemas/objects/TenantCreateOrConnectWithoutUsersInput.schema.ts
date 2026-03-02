import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutUsersInputObjectSchema as TenantCreateWithoutUsersInputObjectSchema } from './TenantCreateWithoutUsersInput.schema';
import { TenantUncheckedCreateWithoutUsersInputObjectSchema as TenantUncheckedCreateWithoutUsersInputObjectSchema } from './TenantUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutUsersInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutUsersInput>;
export const TenantCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
