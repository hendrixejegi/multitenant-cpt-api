import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ExamUncheckedUpdateManyWithoutTenantNestedInputObjectSchema as ExamUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ExamUncheckedUpdateManyWithoutTenantNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  exams: z.lazy(() => ExamUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional()
}).strict();
export const TenantUncheckedUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.TenantUncheckedUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedUpdateWithoutUsersInput>;
export const TenantUncheckedUpdateWithoutUsersInputObjectZodSchema = makeSchema();
