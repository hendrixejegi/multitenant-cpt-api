import type { TenantCreateInput } from '../generated/prisma/models';
import { Prisma } from '../generated/prisma/client';
import {
  BadRequestError,
  NotFoundError,
  handlePrismaError,
} from '../utils/error';
import { prisma } from '../utils/prisma';

async function createTenant(data: TenantCreateInput) {
  const existingTenant = await prisma.tenant.findFirst({
    where: {
      OR: [{ name: data.name }, { slug: data.slug }],
    },
  });

  if (existingTenant !== null) {
    throw new BadRequestError('Tenant already exists');
  }

  return prisma.tenant.create({ data });
}

async function getTenantById(id: string) {
  return prisma.tenant.findUnique({ where: { id } });
}

async function deleteTenantById(id: string) {
  try {
    await prisma.tenant.delete({ where: { id } });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2025'
    ) {
      throw new NotFoundError(`Tenant with id: ${id} does not exist`);
    }

    handlePrismaError(error, `Failed to delete tenant with id: ${id}`);
    throw error;
  }
}

export { createTenant, getTenantById, deleteTenantById };
