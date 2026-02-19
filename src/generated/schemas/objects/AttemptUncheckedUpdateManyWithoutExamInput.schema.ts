import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StatusEnumSchema } from '../enums/StatusEnum.schema';
import { EnumStatusEnumFieldUpdateOperationsInputObjectSchema as EnumStatusEnumFieldUpdateOperationsInputObjectSchema } from './EnumStatusEnumFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  started_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  submitted_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  correct_answers: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  wrong_answers: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([StatusEnumSchema, z.lazy(() => EnumStatusEnumFieldUpdateOperationsInputObjectSchema)]).optional(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AttemptUncheckedUpdateManyWithoutExamInputObjectSchema: z.ZodType<Prisma.AttemptUncheckedUpdateManyWithoutExamInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUncheckedUpdateManyWithoutExamInput>;
export const AttemptUncheckedUpdateManyWithoutExamInputObjectZodSchema = makeSchema();
