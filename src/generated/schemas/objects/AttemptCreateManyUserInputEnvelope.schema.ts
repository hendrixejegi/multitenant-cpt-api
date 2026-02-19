import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AttemptCreateManyUserInputObjectSchema as AttemptCreateManyUserInputObjectSchema } from './AttemptCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AttemptCreateManyUserInputObjectSchema), z.lazy(() => AttemptCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AttemptCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AttemptCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AttemptCreateManyUserInputEnvelope>;
export const AttemptCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
