import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { RoleEnumSchema } from '../enums/RoleEnum.schema'

const makeSchema = () => z.object({
  set: RoleEnumSchema.optional()
}).strict();
export const EnumRoleEnumFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRoleEnumFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumRoleEnumFieldUpdateOperationsInput>;
export const EnumRoleEnumFieldUpdateOperationsInputObjectZodSchema = makeSchema();
