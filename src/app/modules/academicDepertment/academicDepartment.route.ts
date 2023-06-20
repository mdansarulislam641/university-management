import express from 'express'
import { academicDepartmentController } from './academicDepartment.controller'
import validateRequest from '../../middlewares/validateRequest'
import { academicDepartmentZodSchema } from './academicDepartment.validation'
const router = express.Router()

// create a department
router.post(
  '/create-department',
  validateRequest(
    academicDepartmentZodSchema.createAcademicDepartmentZodSchema
  ),
  academicDepartmentController.createDepartment
)

export const AcademicDepartmentRoutes = router
