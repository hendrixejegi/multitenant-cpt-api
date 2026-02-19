import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptWhereInputObjectSchema as AttemptWhereInputObjectSchema } from './AttemptWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttemptWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountAttemptsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountAttemptsArgsObjectZodSchema = makeSchema();
