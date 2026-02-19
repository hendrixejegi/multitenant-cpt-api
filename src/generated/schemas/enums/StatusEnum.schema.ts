import * as z from 'zod';

export const StatusEnumSchema = z.enum(['IN_PROGRESS', 'SUBMITTED', 'EXPIRED'])

export type StatusEnum = z.infer<typeof StatusEnumSchema>;