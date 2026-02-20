import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StatusEnumSchema } from '../enums/StatusEnum.schema'

const makeSchema = () => z.object({
  set: StatusEnumSchema.optional()
}).strict();
export const EnumStatusEnumFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumStatusEnumFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumStatusEnumFieldUpdateOperationsInput>;
export const EnumStatusEnumFieldUpdateOperationsInputObjectZodSchema = makeSchema();
