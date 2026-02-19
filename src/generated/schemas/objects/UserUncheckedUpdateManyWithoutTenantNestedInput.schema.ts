import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateWithoutTenantInputObjectSchema as UserCreateWithoutTenantInputObjectSchema } from './UserCreateWithoutTenantInput.schema';
import { UserUncheckedCreateWithoutTenantInputObjectSchema as UserUncheckedCreateWithoutTenantInputObjectSchema } from './UserUncheckedCreateWithoutTenantInput.schema';
import { UserCreateOrConnectWithoutTenantInputObjectSchema as UserCreateOrConnectWithoutTenantInputObjectSchema } from './UserCreateOrConnectWithoutTenantInput.schema';
import { UserUpsertWithWhereUniqueWithoutTenantInputObjectSchema as UserUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutTenantInput.schema';
import { UserCreateManyTenantInputEnvelopeObjectSchema as UserCreateManyTenantInputEnvelopeObjectSchema } from './UserCreateManyTenantInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutTenantInputObjectSchema as UserUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutTenantInput.schema';
import { UserUpdateManyWithWhereWithoutTenantInputObjectSchema as UserUpdateManyWithWhereWithoutTenantInputObjectSchema } from './UserUpdateManyWithWhereWithoutTenantInput.schema';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTenantInputObjectSchema), z.lazy(() => UserCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput>;
export const UserUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
