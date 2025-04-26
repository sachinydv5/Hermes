import express from 'express';
import { updateUser, userController } from '../../controllers/user.controller';
import { validateData } from '../../middlewares/validation.middleware';
import { userRequestSchema } from '../../types/user/user';

export const userRouter = express.Router();

userRouter.post('/', validateData(userRequestSchema), userController);
userRouter.post('/updateUser', validateData(userRequestSchema), updateUser);

