import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptFindManySchema as AttemptFindManySchema } from '../findManyAttempt.schema';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  attempts: z.union([z.boolean(), z.lazy(() => AttemptFindManySchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
