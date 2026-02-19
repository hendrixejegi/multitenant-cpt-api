import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamCreateManyTenantInputObjectSchema as ExamCreateManyTenantInputObjectSchema } from './ExamCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ExamCreateManyTenantInputObjectSchema), z.lazy(() => ExamCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ExamCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ExamCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ExamCreateManyTenantInputEnvelope>;
export const ExamCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
