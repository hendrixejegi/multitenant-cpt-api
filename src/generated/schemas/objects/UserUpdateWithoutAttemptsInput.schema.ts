import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RoleEnumSchema } from '../enums/RoleEnum.schema';
import { EnumRoleEnumFieldUpdateOperationsInputObjectSchema as EnumRoleEnumFieldUpdateOperationsInputObjectSchema } from './EnumRoleEnumFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutUsersNestedInputObjectSchema as TenantUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutUsersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password_hash: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  role: z.union([RoleEnumSchema, z.lazy(() => EnumRoleEnumFieldUpdateOperationsInputObjectSchema)]).optional(),
  is_guest: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutUsersNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutAttemptsInput>;
export const UserUpdateWithoutAttemptsInputObjectZodSchema = makeSchema();
