import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantCreateWithoutExamsInputObjectSchema as TenantCreateWithoutExamsInputObjectSchema } from './TenantCreateWithoutExamsInput.schema';
import { TenantUncheckedCreateWithoutExamsInputObjectSchema as TenantUncheckedCreateWithoutExamsInputObjectSchema } from './TenantUncheckedCreateWithoutExamsInput.schema';
import { TenantCreateOrConnectWithoutExamsInputObjectSchema as TenantCreateOrConnectWithoutExamsInputObjectSchema } from './TenantCreateOrConnectWithoutExamsInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutExamsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutExamsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutExamsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutExamsInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutExamsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutExamsInput>;
export const TenantCreateNestedOneWithoutExamsInputObjectZodSchema = makeSchema();
