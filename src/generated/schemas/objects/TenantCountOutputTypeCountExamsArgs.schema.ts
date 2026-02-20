import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './ExamWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamWhereInputObjectSchema).optional()
}).strict();
export const TenantCountOutputTypeCountExamsArgsObjectSchema = makeSchema();
export const TenantCountOutputTypeCountExamsArgsObjectZodSchema = makeSchema();
