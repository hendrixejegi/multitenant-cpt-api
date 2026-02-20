import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ExamWhereInputObjectSchema as ExamWhereInputObjectSchema } from './objects/ExamWhereInput.schema';
import { ExamOrderByWithAggregationInputObjectSchema as ExamOrderByWithAggregationInputObjectSchema } from './objects/ExamOrderByWithAggregationInput.schema';
import { ExamScalarWhereWithAggregatesInputObjectSchema as ExamScalarWhereWithAggregatesInputObjectSchema } from './objects/ExamScalarWhereWithAggregatesInput.schema';
import { ExamScalarFieldEnumSchema } from './enums/ExamScalarFieldEnum.schema';
import { ExamCountAggregateInputObjectSchema as ExamCountAggregateInputObjectSchema } from './objects/ExamCountAggregateInput.schema';
import { ExamMinAggregateInputObjectSchema as ExamMinAggregateInputObjectSchema } from './objects/ExamMinAggregateInput.schema';
import { ExamMaxAggregateInputObjectSchema as ExamMaxAggregateInputObjectSchema } from './objects/ExamMaxAggregateInput.schema';
import { ExamAvgAggregateInputObjectSchema as ExamAvgAggregateInputObjectSchema } from './objects/ExamAvgAggregateInput.schema';
import { ExamSumAggregateInputObjectSchema as ExamSumAggregateInputObjectSchema } from './objects/ExamSumAggregateInput.schema';

export const ExamGroupBySchema: z.ZodType<Prisma.ExamGroupByArgs> = z.object({ where: ExamWhereInputObjectSchema.optional(), orderBy: z.union([ExamOrderByWithAggregationInputObjectSchema, ExamOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ExamScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ExamScalarFieldEnumSchema), _count: z.union([ z.literal(true), ExamCountAggregateInputObjectSchema ]).optional(), _min: ExamMinAggregateInputObjectSchema.optional(), _max: ExamMaxAggregateInputObjectSchema.optional(), _avg: ExamAvgAggregateInputObjectSchema.optional(), _sum: ExamSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExamGroupByArgs>;

export const ExamGroupByZodSchema = z.object({ where: ExamWhereInputObjectSchema.optional(), orderBy: z.union([ExamOrderByWithAggregationInputObjectSchema, ExamOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ExamScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ExamScalarFieldEnumSchema), _count: z.union([ z.literal(true), ExamCountAggregateInputObjectSchema ]).optional(), _min: ExamMinAggregateInputObjectSchema.optional(), _max: ExamMaxAggregateInputObjectSchema.optional(), _avg: ExamAvgAggregateInputObjectSchema.optional(), _sum: ExamSumAggregateInputObjectSchema.optional() }).strict();