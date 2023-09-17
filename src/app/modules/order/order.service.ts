import { Order, UserRole } from '@prisma/client';
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
  user: any,
  options: IPaginationOptions
): Promise<IGenericResponse<Order[] | null>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { userId, role } = user;

  let result = null;
  let total = 0;

  if (role === UserRole.ADMIN) {
    result = await prisma.order.findMany({
      skip,
      take: limit,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        user: true,
      },
    });
    total = await prisma.order.count({});
  } else if (role === UserRole.CUSTOMER) {
    result = await prisma.order.findMany({
      where: {
        userId,
      },
      skip,
      take: limit,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        user: true,
      },
    });
    total = await prisma.order.count({
      where: {
        userId,
      },
    });
  }

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
