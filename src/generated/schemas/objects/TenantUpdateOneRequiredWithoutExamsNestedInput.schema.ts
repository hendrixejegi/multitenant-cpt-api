import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantCreateWithoutExamsInputObjectSchema as TenantCreateWithoutExamsInputObjectSchema } from './TenantCreateWithoutExamsInput.schema';
import { TenantUncheckedCreateWithoutExamsInputObjectSchema as TenantUncheckedCreateWithoutExamsInputObjectSchema } from './TenantUncheckedCreateWithoutExamsInput.schema';
import { TenantCreateOrConnectWithoutExamsInputObjectSchema as TenantCreateOrConnectWithoutExamsInputObjectSchema } from './TenantCreateOrConnectWithoutExamsInput.schema';
import { TenantUpsertWithoutExamsInputObjectSchema as TenantUpsertWithoutExamsInputObjectSchema } from './TenantUpsertWithoutExamsInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutExamsInputObjectSchema as TenantUpdateToOneWithWhereWithoutExamsInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutExamsInput.schema';
import { TenantUpdateWithoutExamsInputObjectSchema as TenantUpdateWithoutExamsInputObjectSchema } from './TenantUpdateWithoutExamsInput.schema';
import { TenantUncheckedUpdateWithoutExamsInputObjectSchema as TenantUncheckedUpdateWithoutExamsInputObjectSchema } from './TenantUncheckedUpdateWithoutExamsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutExamsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutExamsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutExamsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutExamsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutExamsInputObjectSchema), z.lazy(() => TenantUpdateWithoutExamsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutExamsInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutExamsNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutExamsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutExamsNestedInput>;
export const TenantUpdateOneRequiredWithoutExamsNestedInputObjectZodSchema = makeSchema();
