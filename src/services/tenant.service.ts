import type { TenantCreateInput } from '../generated/prisma/models';
import { AppError } from '../utils/error';
import { prisma } from '../utils/prisma';

async function createTenant(data: TenantCreateInput) {
  const tenant = await prisma.tenant.create({ data });
  return tenant;
}

async function getTenantById(id: string) {
  const tenant = await prisma.tenant.findUnique({ where: { id } });

  if (tenant === null) {
    throw new AppError({
      status: 404,
      code: 'not_found',
      message: `Tenant with id:${id} doesn't exist`,
    });
  }

  return tenant;
}

export { createTenant, getTenantById };
