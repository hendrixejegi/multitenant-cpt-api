import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TenantWhereUniqueInputObjectSchema: z.ZodType<Prisma.TenantWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantWhereUniqueInput>;
export const TenantWhereUniqueInputObjectZodSchema = makeSchema();
