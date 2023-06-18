import express from 'express'
import { AcademicSemesterValidation } from './academicSemester.validation'
import validateRequest from '../../middlewares/validateRequest'
import { academicSemesterController } from './academicSemester.controller'

const router = express.Router()

// create a new semester
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createNewAcademicSemesterDB
)

// get single semester
router.get('/:id', academicSemesterController.getSingleSemester)
// update single semester
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateSemester
)

// get all semester
router.get('/', academicSemesterController.getAllSemesters)

export const AcademicSemesterRoutes = router
