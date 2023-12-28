/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { Schema } from 'mongoose';
import { AnyZodObject } from 'zod';
import { createStudentValidationSchema } from '../student/student.zod.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent
);

export const UserRoutes = router;
