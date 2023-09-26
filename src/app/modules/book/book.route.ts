import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookZodValidation } from './book.validation';

const bookRouter = express.Router();

bookRouter.post(
  '/create-book',
  validateRequest(BookZodValidation.create),
  auth(UserRole.admin),
  BookController.create
);
bookRouter.get('/', BookController.findAll);
bookRouter.get('/:id', BookController.findOne);
bookRouter.patch(
  '/:id',
  validateRequest(BookZodValidation.update),
  auth(UserRole.admin),
  BookController.updateOne
);
bookRouter.delete('/:id', auth(UserRole.admin), BookController.deleteOne);

export const BookRouter = bookRouter;
