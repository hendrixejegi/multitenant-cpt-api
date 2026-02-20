import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'tenant_id', 'name', 'email', 'password_hash', 'role', 'is_guest', 'created_at'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;