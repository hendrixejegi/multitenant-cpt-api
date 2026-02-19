import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StatusEnumSchema } from '../enums/StatusEnum.schema';
import { NestedEnumStatusEnumFilterObjectSchema as NestedEnumStatusEnumFilterObjectSchema } from './NestedEnumStatusEnumFilter.schema'

const makeSchema = () => z.object({
  equals: StatusEnumSchema.optional(),
  in: StatusEnumSchema.array().optional(),
  notIn: StatusEnumSchema.array().optional(),
  not: z.union([StatusEnumSchema, z.lazy(() => NestedEnumStatusEnumFilterObjectSchema)]).optional()
}).strict();
export const EnumStatusEnumFilterObjectSchema: z.ZodType<Prisma.EnumStatusEnumFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStatusEnumFilter>;
export const EnumStatusEnumFilterObjectZodSchema = makeSchema();
