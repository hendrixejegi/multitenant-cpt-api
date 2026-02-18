import { Router } from 'express';
import examRouter from './exam.router';
import authRouter from './auth.router';
import questionsRouter from './questions.router';

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
  {
    path: '/exams',
    route: questionsRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;
