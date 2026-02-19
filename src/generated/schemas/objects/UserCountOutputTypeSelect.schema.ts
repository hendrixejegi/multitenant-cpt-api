import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCountOutputTypeCountAttemptsArgsObjectSchema as UserCountOutputTypeCountAttemptsArgsObjectSchema } from './UserCountOutputTypeCountAttemptsArgs.schema'

const makeSchema = () => z.object({
  attempts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAttemptsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
