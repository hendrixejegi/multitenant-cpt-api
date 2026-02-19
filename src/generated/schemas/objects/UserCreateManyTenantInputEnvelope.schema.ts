import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserCreateManyTenantInputObjectSchema as UserCreateManyTenantInputObjectSchema } from './UserCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserCreateManyTenantInputObjectSchema), z.lazy(() => UserCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.UserCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyTenantInputEnvelope>;
export const UserCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
