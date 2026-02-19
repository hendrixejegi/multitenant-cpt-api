import type { TenantCreateInput } from '../generated/prisma/models';
import { BadRequestError, handlePrismaError } from '../utils/error';
import { prisma } from '../utils/prisma';

async function createTenant(data: TenantCreateInput) {
  const existingTenant = await prisma.tenant.findFirst({
    where: { name: data.name, slug: data.slug },
  });

  if (!existingTenant === null) {
    throw new BadRequestError('Tenant already exists');
  }

  const newTenant = await prisma.tenant.create({ data });
  prisma.$disconnect();
  return newTenant;
}

async function getTenantById(id: string) {
  const tenant = await prisma.tenant.findUnique({ where: { id } });
  prisma.$disconnect();
  return tenant;
}

async function deleteTenantById(id: string) {
  try {
    await prisma.tenant.delete({ where: { id } });
  } catch (error) {
    handlePrismaError(error, `Failed to delete tenant with id: ${id}`);
    throw error;
  } finally {
    prisma.$disconnect();
  }
}

export { createTenant, getTenantById, deleteTenantById };
