import { Router } from 'express';
import examRouter from './exam.router';

const router = Router();

const defaultRoutes = [
  {
    path: '/exams',
    route: examRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
