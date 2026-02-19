import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptFindManySchema as AttemptFindManySchema } from '../findManyAttempt.schema';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenant_id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password_hash: z.boolean().optional(),
  role: z.boolean().optional(),
  is_guest: z.boolean().optional(),
  created_at: z.boolean().optional(),
  attempts: z.union([z.boolean(), z.lazy(() => AttemptFindManySchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
