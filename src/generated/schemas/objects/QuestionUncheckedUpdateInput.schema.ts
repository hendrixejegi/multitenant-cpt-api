import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuestionUpdateoptionsInputObjectSchema as QuestionUpdateoptionsInputObjectSchema } from './QuestionUpdateoptionsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  exam_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  options: z.union([z.lazy(() => QuestionUpdateoptionsInputObjectSchema), z.string().array()]).optional(),
  correct_answer: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const QuestionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.QuestionUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionUncheckedUpdateInput>;
export const QuestionUncheckedUpdateInputObjectZodSchema = makeSchema();
