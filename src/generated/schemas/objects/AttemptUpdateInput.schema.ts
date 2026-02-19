import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StatusEnumSchema } from '../enums/StatusEnum.schema';
import { EnumStatusEnumFieldUpdateOperationsInputObjectSchema as EnumStatusEnumFieldUpdateOperationsInputObjectSchema } from './EnumStatusEnumFieldUpdateOperationsInput.schema';
import { ExamUpdateOneRequiredWithoutAttemptsNestedInputObjectSchema as ExamUpdateOneRequiredWithoutAttemptsNestedInputObjectSchema } from './ExamUpdateOneRequiredWithoutAttemptsNestedInput.schema';
import { UserUpdateOneRequiredWithoutAttemptsNestedInputObjectSchema as UserUpdateOneRequiredWithoutAttemptsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAttemptsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  started_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  submitted_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  correct_answers: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  wrong_answers: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([StatusEnumSchema, z.lazy(() => EnumStatusEnumFieldUpdateOperationsInputObjectSchema)]).optional(),
  score: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  exam: z.lazy(() => ExamUpdateOneRequiredWithoutAttemptsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAttemptsNestedInputObjectSchema).optional()
}).strict();
export const AttemptUpdateInputObjectSchema: z.ZodType<Prisma.AttemptUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttemptUpdateInput>;
export const AttemptUpdateInputObjectZodSchema = makeSchema();
