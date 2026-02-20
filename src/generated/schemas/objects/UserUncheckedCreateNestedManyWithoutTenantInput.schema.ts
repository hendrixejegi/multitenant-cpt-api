import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateWithoutTenantInputObjectSchema as UserCreateWithoutTenantInputObjectSchema } from './UserCreateWithoutTenantInput.schema';
import { UserUncheckedCreateWithoutTenantInputObjectSchema as UserUncheckedCreateWithoutTenantInputObjectSchema } from './UserUncheckedCreateWithoutTenantInput.schema';
import { UserCreateOrConnectWithoutTenantInputObjectSchema as UserCreateOrConnectWithoutTenantInputObjectSchema } from './UserCreateOrConnectWithoutTenantInput.schema';
import { UserCreateManyTenantInputEnvelopeObjectSchema as UserCreateManyTenantInputEnvelopeObjectSchema } from './UserCreateManyTenantInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTenantInputObjectSchema), z.lazy(() => UserCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutTenantInput>;
export const UserUncheckedCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
