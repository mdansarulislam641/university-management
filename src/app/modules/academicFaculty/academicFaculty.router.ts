import express from 'express'
import academicFacultyController from './academicFaculty.controller'
import validateRequest from '../../middlewares/validateRequest'
import academicFacultyValidation from './academicFaculty.validate'
import academicFacultyValidate from './academicFaculty.validate'

const router = express.Router()

router.post(
  '/create-faculty',
  validateRequest(academicFacultyValidation.createAcademicFacultyZodSchema),
  academicFacultyController.createFaculty
)

// get single faculty
router.get('/:id', academicFacultyController.getSingleFaculty)

// update single faculy
router.patch(
  '/:id',
  validateRequest(academicFacultyValidate.updateAcademicFacultyZodSchema),
  academicFacultyController.updateFaculty
)

// delete single faculty
router.delete('/:id', academicFacultyController.deleteSingleFaculty)

// get all faculties
router.get('/', academicFacultyController.getAllFaculties)

export const AcademicFacultyRoutes = router
