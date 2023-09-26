import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { ProfileController } from './profile.controller';

const profileRouter = express.Router();

profileRouter.get(
  '/',
  auth(UserRole.admin, UserRole.customer),
  ProfileController.getProfile
);

export const ProfileRouter = profileRouter;
