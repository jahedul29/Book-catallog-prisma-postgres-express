import express from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
import { BookRouter } from '../modules/book/book.route';
import { CategoryRouter } from '../modules/category/category.route';
import { OrderRouter } from '../modules/order/order.route';
import { UserRouter } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/categories',
    route: CategoryRouter,
  },
  {
    path: '/books',
    route: BookRouter,
  },
  {
    path: '/orders',
    route: OrderRouter,
  },
  {
    path: '/profile',
    route: OrderRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
