import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptWhereInputObjectSchema as AttemptWhereInputObjectSchema } from './AttemptWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AttemptWhereInputObjectSchema).optional(),
  some: z.lazy(() => AttemptWhereInputObjectSchema).optional(),
  none: z.lazy(() => AttemptWhereInputObjectSchema).optional()
}).strict();
export const AttemptListRelationFilterObjectSchema: z.ZodType<Prisma.AttemptListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AttemptListRelationFilter>;
export const AttemptListRelationFilterObjectZodSchema = makeSchema();
