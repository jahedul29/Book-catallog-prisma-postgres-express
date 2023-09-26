import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryZodValidation } from './category.validation';

const categoryRouter = express.Router();

categoryRouter.post(
  '/create-category',
  validateRequest(CategoryZodValidation.create),
  auth(UserRole.admin),
  CategoryController.create
);
categoryRouter.get('/', CategoryController.findAll);
categoryRouter.get('/:id', CategoryController.findOne);
categoryRouter.patch(
  '/:id',
  validateRequest(CategoryZodValidation.update),
  auth(UserRole.admin),
  CategoryController.updateOne
);
categoryRouter.delete(
  '/:id',
  auth(UserRole.admin),
  CategoryController.deleteOne
);

export const CategoryRouter = categoryRouter;
