import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TenantCountOutputTypeCountUsersArgsObjectSchema as TenantCountOutputTypeCountUsersArgsObjectSchema } from './TenantCountOutputTypeCountUsersArgs.schema';
import { TenantCountOutputTypeCountExamsArgsObjectSchema as TenantCountOutputTypeCountExamsArgsObjectSchema } from './TenantCountOutputTypeCountExamsArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => TenantCountOutputTypeCountUsersArgsObjectSchema)]).optional(),
  exams: z.union([z.boolean(), z.lazy(() => TenantCountOutputTypeCountExamsArgsObjectSchema)]).optional()
}).strict();
export const TenantCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TenantCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantCountOutputTypeSelect>;
export const TenantCountOutputTypeSelectObjectZodSchema = makeSchema();
