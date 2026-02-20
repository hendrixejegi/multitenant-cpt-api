import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTenantInputObjectSchema as UserCreateWithoutTenantInputObjectSchema } from './UserCreateWithoutTenantInput.schema';
import { UserUncheckedCreateWithoutTenantInputObjectSchema as UserUncheckedCreateWithoutTenantInputObjectSchema } from './UserUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTenantInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTenantInput>;
export const UserCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
