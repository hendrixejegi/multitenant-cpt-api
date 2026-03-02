import { Router } from 'express';
import passport from 'passport';
import { requireRole } from '../middlewares/permission.middleware';
import { RoleEnum } from '../generated/prisma/enums';
import { getAttemptDetails } from '../controllers/attempt.controller';

const router = Router();

router.get('/:attemptId', [
  passport.authenticate('jwt', { session: false }),
  requireRole(RoleEnum.ADMIN),
  getAttemptDetails,
]);

export default router;
