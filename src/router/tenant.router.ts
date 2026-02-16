import { Router } from 'express';
import passport from 'passport';
import { requireRole } from '../middlewares/permission.middleware';
import { RoleEnum } from '../generated/prisma/enums';
import { getTenantInfo } from '../controllers/tenant.controller';

const router = Router();

router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  requireRole(RoleEnum.ADMIN),
  getTenantInfo,
);

export default router;
