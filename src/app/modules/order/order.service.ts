import { Order } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { IOrderRequestBody } from './order.interface';

const create = async (
  userId: string,
  data: IOrderRequestBody
): Promise<Order | null> => {
  const result = await prisma.order.create({
    data: { ...data, userId },
    include: {
      user: true,
    },
  });

  return result;
};

const findAll = async (
  options: IPaginationOptions
): Promise<IGenericResponse<Order[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const result = await prisma.order.findMany({
    skip,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      user: true,
    },
  });

  const total = await prisma.order.count({});

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const findOne = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.findFirst({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });

  return result;
};

export const OrderService = {
  create,
  findAll,
  findOne,
};
