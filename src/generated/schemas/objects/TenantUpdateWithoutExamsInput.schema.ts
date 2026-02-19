import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutTenantNestedInputObjectSchema as UserUpdateManyWithoutTenantNestedInputObjectSchema } from './UserUpdateManyWithoutTenantNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutTenantNestedInputObjectSchema).optional()
}).strict();
export const TenantUpdateWithoutExamsInputObjectSchema: z.ZodType<Prisma.TenantUpdateWithoutExamsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateWithoutExamsInput>;
export const TenantUpdateWithoutExamsInputObjectZodSchema = makeSchema();
