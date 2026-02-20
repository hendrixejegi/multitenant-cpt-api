import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { QuestionUncheckedUpdateManyWithoutExamNestedInputObjectSchema as QuestionUncheckedUpdateManyWithoutExamNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutExamNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  duration_minutes: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  is_published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  questions: z.lazy(() => QuestionUncheckedUpdateManyWithoutExamNestedInputObjectSchema).optional()
}).strict();
export const ExamUncheckedUpdateWithoutAttemptsInputObjectSchema: z.ZodType<Prisma.ExamUncheckedUpdateWithoutAttemptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUncheckedUpdateWithoutAttemptsInput>;
export const ExamUncheckedUpdateWithoutAttemptsInputObjectZodSchema = makeSchema();
