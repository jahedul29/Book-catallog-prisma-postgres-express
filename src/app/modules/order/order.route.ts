import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderController } from './order.controller';
import { OrderZodValidation } from './order.validation';

const orderRouter = express.Router();

orderRouter.post(
  '/create-order',
  validateRequest(OrderZodValidation.create),
  auth(UserRole.customer),
  OrderController.create
);
orderRouter.get(
  '/',
  auth(UserRole.admin, UserRole.customer),
  OrderController.findAll
);
orderRouter.get(
  '/:id',
  auth(UserRole.admin, UserRole.customer),
  OrderController.findOne
);

export const OrderRouter = orderRouter;
