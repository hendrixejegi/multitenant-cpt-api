import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QuestionUpdateManyWithoutExamNestedInputObjectSchema as QuestionUpdateManyWithoutExamNestedInputObjectSchema } from './QuestionUpdateManyWithoutExamNestedInput.schema';
import { AttemptUpdateManyWithoutExamNestedInputObjectSchema as AttemptUpdateManyWithoutExamNestedInputObjectSchema } from './AttemptUpdateManyWithoutExamNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  duration_minutes: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  is_published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  questions: z.lazy(() => QuestionUpdateManyWithoutExamNestedInputObjectSchema).optional(),
  attempts: z.lazy(() => AttemptUpdateManyWithoutExamNestedInputObjectSchema).optional()
}).strict();
export const ExamUpdateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ExamUpdateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpdateWithoutTenantInput>;
export const ExamUpdateWithoutTenantInputObjectZodSchema = makeSchema();
