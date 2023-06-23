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

// get single department
router.get('/:id', academicDepartmentController.getSingleDepartment)
// update single department
router.patch(
  '/:id',
  validateRequest(academicDepartmentZodSchema.updateDepartmentValidation),
  academicDepartmentController.updateSingleDepartment
)

// delete single department
router.delete('/:id', academicDepartmentController.deleteDepartment)
// get all academic Department
router.get('/', academicDepartmentController.getAllAcademicDepartment)

export const AcademicDepartmentRoutes = router
