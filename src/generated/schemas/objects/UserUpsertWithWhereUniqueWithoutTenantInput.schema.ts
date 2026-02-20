import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutTenantInputObjectSchema as UserUpdateWithoutTenantInputObjectSchema } from './UserUpdateWithoutTenantInput.schema';
import { UserUncheckedUpdateWithoutTenantInputObjectSchema as UserUncheckedUpdateWithoutTenantInputObjectSchema } from './UserUncheckedUpdateWithoutTenantInput.schema';
import { UserCreateWithoutTenantInputObjectSchema as UserCreateWithoutTenantInputObjectSchema } from './UserCreateWithoutTenantInput.schema';
import { UserUncheckedCreateWithoutTenantInputObjectSchema as UserUncheckedCreateWithoutTenantInputObjectSchema } from './UserUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutTenantInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTenantInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutTenantInput>;
export const UserUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
