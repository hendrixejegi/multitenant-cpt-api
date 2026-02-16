import { Router } from 'express';
import passport from 'passport';
import { requireRole } from '../middlewares/permission.middleware';
import { getUserInfo, login, register } from '../controllers/auth.controller';
import { RoleEnum } from '../generated/prisma/enums';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  requireRole(RoleEnum.ADMIN),
  getUserInfo,
);

export default router;
