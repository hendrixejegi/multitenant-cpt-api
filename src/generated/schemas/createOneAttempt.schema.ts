import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AttemptSelectObjectSchema as AttemptSelectObjectSchema } from './objects/AttemptSelect.schema';
import { AttemptIncludeObjectSchema as AttemptIncludeObjectSchema } from './objects/AttemptInclude.schema';
import { AttemptCreateInputObjectSchema as AttemptCreateInputObjectSchema } from './objects/AttemptCreateInput.schema';
import { AttemptUncheckedCreateInputObjectSchema as AttemptUncheckedCreateInputObjectSchema } from './objects/AttemptUncheckedCreateInput.schema';

export const AttemptCreateOneSchema: z.ZodType<Prisma.AttemptCreateArgs> = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), data: z.union([AttemptCreateInputObjectSchema, AttemptUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AttemptCreateArgs>;

export const AttemptCreateOneZodSchema = z.object({ select: AttemptSelectObjectSchema.optional(), include: AttemptIncludeObjectSchema.optional(), data: z.union([AttemptCreateInputObjectSchema, AttemptUncheckedCreateInputObjectSchema]) }).strict();