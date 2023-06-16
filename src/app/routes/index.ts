import express from 'express'
import { UserRoute } from '../modules/users/users.route'
import { AcademicSemesterRoutes } from '../modules/acedemicSemester/academicSemester.route'
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
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

// router.use('/users', UserRoute)
// router.use('/academic-semesters', AcademicSemesterRoutes)

export default router
