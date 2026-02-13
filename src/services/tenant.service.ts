import type { TenantCreateInput } from '../generated/prisma/models';
import { AppError, handlePrismaError } from '../utils/error';
import { prisma } from '../utils/prisma';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

async function createTenant(data: TenantCreateInput) {
  const existingTenant = await prisma.tenant.findFirst({
    where: { name: data.name, slug: data.slug },
  });

  if (!existingTenant === null) {
    throw new AppError({
      status: StatusCodes.BAD_REQUEST,
      reason: ReasonPhrases.BAD_REQUEST,
      message: 'Tenant already exists',
    });
  }

  const newTenant = await prisma.tenant.create({ data });
  return newTenant;
  const tenant = await prisma.tenant.create({ data });
  prisma.$disconnect();
  return tenant;
}

async function getTenantById(id: string) {
  const tenant = await prisma.tenant.findUnique({ where: { id } });
  prisma.$disconnect();

  if (tenant === null) {
    throw new AppError({
      status: StatusCodes.NOT_FOUND,
      reason: ReasonPhrases.NOT_FOUND,
      message: `Tenant with id:${id} doesn't exist`,
    });
  }

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
