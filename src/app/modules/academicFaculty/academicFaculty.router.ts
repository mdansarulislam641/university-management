import express from 'express'
const router = express.Router()

router.post('/create-faculty', academicFacultyController.createFaculty)

export const AcademicFacultyRoutes = router
