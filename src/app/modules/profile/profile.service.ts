import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const getProfile = async (id: string, user: any): Promise<User | null> => {
  const result = await prisma.user.findFirst({
    where: {
      id: user.userId,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Profile not found');
  }

  return result;
};

export const ProfileService = {
  getProfile,
};
