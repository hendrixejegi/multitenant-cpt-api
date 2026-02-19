import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutTenantNestedInputObjectSchema as UserUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ExamUncheckedUpdateManyWithoutTenantNestedInputObjectSchema as ExamUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ExamUncheckedUpdateManyWithoutTenantNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  exams: z.lazy(() => ExamUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional()
}).strict();
export const TenantUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TenantUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedUpdateInput>;
export const TenantUncheckedUpdateInputObjectZodSchema = makeSchema();
