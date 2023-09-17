import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderController } from './order.controller';
import { OrderZodValidation } from './order.validation';

const orderRouter = express.Router();

orderRouter.post(
  '/create-book',
  validateRequest(OrderZodValidation.create),
  auth(UserRole.CUSTOMER),
  OrderController.create
);
orderRouter.get('/', auth(UserRole.ADMIN), OrderController.findAll);
// orderRouter.get('/:id', auth(UserRole.ADMIN), OrderController.findOne);

export const OrderRouter = orderRouter;
