/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { bookFilterableFields } from './book.constants';
import { BookService } from './book.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;

  const result = await BookService.create(book);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationParams = pick(req.query, paginationFields);

  const result = await BookService.findAll(filters, paginationParams);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const findOne = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.findOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book fetched successfully',
    data: result,
  });
});

const findByCategoryId = catchAsync(async (req: Request, res: Response) => {
  const categoryId = req.params.categoryId;
  const paginationParams = pick(req.query, paginationFields);

  const result = await BookService.findByCategoryId(
    categoryId,
    paginationParams
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateOne = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const book = req.body;

  const result = await BookService.updateOne(id, book);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book updated successfully',
    data: result,
  });
});

const deleteOne = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.deleteOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book deleted successfully',
    data: result,
  });
});

export const BookController = {
  create,
  findAll,
  findOne,
  findByCategoryId,
  updateOne,
  deleteOne,
};
