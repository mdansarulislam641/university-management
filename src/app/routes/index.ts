import express from 'express'
import { UserRoute } from '../modules/users/users.route'
import { AcademicSemesterRoutes } from '../modules/acedemicSemester/academicSemester.route'
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.router'
import { AcademicDepartmentRoutes } from '../modules/academicDepertment/academicDepartment.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
