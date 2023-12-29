import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);
router.patch(
  '/:studentId',
  validateRequest(update),
  StudentControllers.updateStudent
);
router.delete('/:studentId', StudentControllers.deleteStudent);
router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
