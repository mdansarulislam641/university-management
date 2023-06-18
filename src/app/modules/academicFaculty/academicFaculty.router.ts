import express from 'express'
import { academicFacultyController } from './academicFaculty.controller'
const router = express.Router()

router.post('/create-faculty', academicFacultyController.createFaculty)

export const AcademicFacultyRoutes = router
