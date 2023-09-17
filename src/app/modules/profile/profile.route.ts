import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { ProfileController } from './profile.controller';

const profileRouter = express.Router();

profileRouter.get(
  '/',
  auth(UserRole.ADMIN, UserRole.CUSTOMER),
  ProfileController.getProfile
);

export const ProfileRouter = profileRouter;
