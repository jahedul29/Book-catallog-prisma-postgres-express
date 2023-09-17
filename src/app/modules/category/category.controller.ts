/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { categoryFilterableFields } from './category.constants';
import { CategoryService } from './category.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const category = req.body;

  const result = await CategoryService.create(category);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, categoryFilterableFields);
  const paginationParams = pick(req.query, paginationFields);

  const result = await CategoryService.findAll(filters, paginationParams);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const findOne = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CategoryService.findOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category fetched successfully',
    data: result,
  });
});

const updateOne = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const category = req.body;

  const result = await CategoryService.updateOne(id, category);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category updated successfully',
    data: result,
  });
});

const deleteOne = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CategoryService.deleteOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category deleted successfully',
    data: result,
  });
});

export const CategoryController = {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
};
