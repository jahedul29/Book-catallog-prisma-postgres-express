/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const orderedBooks = req.body;
  const userId = (req.user as any).userId;

  const result = await OrderService.create(userId, orderedBooks);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (req: Request, res: Response) => {
  const paginationParams = pick(req.query, paginationFields);
  const user = req.user as any;

  const result = await OrderService.findAll(user, paginationParams);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const findOne = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await OrderService.findOne(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order fetched successfully',
    data: result,
  });
});

export const OrderController = {
  create,
  findAll,
  findOne,
};
