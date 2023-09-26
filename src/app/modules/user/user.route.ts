import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserZodValidation } from './user.validation';

const userRouter = express.Router();

userRouter.get('/', auth(UserRole.admin), UserController.findAll);
userRouter.get('/:id', auth(UserRole.admin), UserController.findOne);
userRouter.patch(
  '/:id',
  validateRequest(UserZodValidation.update),
  auth(UserRole.admin),
  UserController.updateOne
);
userRouter.delete('/:id', auth(UserRole.admin), UserController.deleteOne);

export const UserRouter = userRouter;
