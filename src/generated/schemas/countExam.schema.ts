import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamOrderByWithRelationInputObjectSchema as ExamOrderByWithRelationInputObjectSchema } from './objects/ExamOrderByWithRelationInput.schema';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';
import { ExamWhereUniqueInputObjectSchema as ExamWhereUniqueInputObjectSchema } from './objects/ExamWhereUniqueInput.schema';
import { ExamCountAggregateInputObjectSchema as ExamCountAggregateInputObjectSchema } from './objects/ExamCountAggregateInput.schema';

export const ExamCountSchema: z.ZodType<Prisma.ExamCountArgs> = z.object({ orderBy: z.union([ExamOrderByWithRelationInputObjectSchema, ExamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExamWhereInputObjectSchema.optional(), cursor: ExamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ExamCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ExamCountArgs>;

export const ExamCountZodSchema = z.object({ orderBy: z.union([ExamOrderByWithRelationInputObjectSchema, ExamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExamWhereInputObjectSchema.optional(), cursor: ExamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ExamCountAggregateInputObjectSchema ]).optional() }).strict();