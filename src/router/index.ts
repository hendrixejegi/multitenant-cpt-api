import { Router } from 'express';
import examRouter from './exam.router';
import authRouter from './auth.router';

const router = Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/exams',
    route: examRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
