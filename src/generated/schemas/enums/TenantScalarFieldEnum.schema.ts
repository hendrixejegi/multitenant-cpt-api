import * as z from 'zod';

export const TenantScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'created_at'])

export type TenantScalarFieldEnum = z.infer<typeof TenantScalarFieldEnumSchema>;