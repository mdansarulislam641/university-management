import express from 'express'
import academicFacultyController from './academicFaculty.controller'
import validateRequest from '../../middlewares/validateRequest'
import { academicFacultyValidation } from './academicFaculty.validate'

const router = express.Router()

router.post(
  '/create-faculty',
  validateRequest(academicFacultyValidation.createAcademicFacultyZodSchema),
  academicFacultyController.createFaculty
)

// get single faculty
router.get('/:id', academicFacultyController.getSingleFaculty)

// get all faculties
router.get('/', academicFacultyController.getAllFaculties)

export const AcademicFacultyRoutes = router
