import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantCreateWithoutUsersInputObjectSchema as TenantCreateWithoutUsersInputObjectSchema } from './TenantCreateWithoutUsersInput.schema';
import { TenantUncheckedCreateWithoutUsersInputObjectSchema as TenantUncheckedCreateWithoutUsersInputObjectSchema } from './TenantUncheckedCreateWithoutUsersInput.schema';
import { TenantCreateOrConnectWithoutUsersInputObjectSchema as TenantCreateOrConnectWithoutUsersInputObjectSchema } from './TenantCreateOrConnectWithoutUsersInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutUsersInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutUsersInput>;
export const TenantCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();
