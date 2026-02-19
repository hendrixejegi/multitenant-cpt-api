import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StatusEnumSchema } from '../enums/StatusEnum.schema'

const nestedenumstatusenumfilterSchema = z.object({
  equals: StatusEnumSchema.optional(),
  in: StatusEnumSchema.array().optional(),
  notIn: StatusEnumSchema.array().optional(),
  not: z.union([StatusEnumSchema, z.lazy(() => NestedEnumStatusEnumFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumStatusEnumFilterObjectSchema: z.ZodType<Prisma.NestedEnumStatusEnumFilter> = nestedenumstatusenumfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStatusEnumFilter>;
export const NestedEnumStatusEnumFilterObjectZodSchema = nestedenumstatusenumfilterSchema;
