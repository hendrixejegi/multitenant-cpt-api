import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ExamScalarWhereInputObjectSchema as ExamScalarWhereInputObjectSchema } from './ExamScalarWhereInput.schema';
import { ExamUpdateManyMutationInputObjectSchema as ExamUpdateManyMutationInputObjectSchema } from './ExamUpdateManyMutationInput.schema';
import { ExamUncheckedUpdateManyWithoutTenantInputObjectSchema as ExamUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ExamUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExamScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ExamUpdateManyMutationInputObjectSchema), z.lazy(() => ExamUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ExamUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ExamUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ExamUpdateManyWithWhereWithoutTenantInput>;
export const ExamUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
