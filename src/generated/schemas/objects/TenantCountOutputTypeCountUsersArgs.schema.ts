import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const TenantCountOutputTypeCountUsersArgsObjectSchema = makeSchema();
export const TenantCountOutputTypeCountUsersArgsObjectZodSchema = makeSchema();
