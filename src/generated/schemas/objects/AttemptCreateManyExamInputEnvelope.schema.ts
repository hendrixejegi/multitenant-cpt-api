import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptCreateManyExamInputObjectSchema as AttemptCreateManyExamInputObjectSchema } from './AttemptCreateManyExamInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AttemptCreateManyExamInputObjectSchema), z.lazy(() => AttemptCreateManyExamInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AttemptCreateManyExamInputEnvelopeObjectSchema: z.ZodType<Prisma.AttemptCreateManyExamInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AttemptCreateManyExamInputEnvelope>;
export const AttemptCreateManyExamInputEnvelopeObjectZodSchema = makeSchema();
