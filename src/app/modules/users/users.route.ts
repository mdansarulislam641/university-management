import express from 'express'
import { UserController } from './user.controller'
import { UserValidation } from './users.validation'
import validateRequest from '../../middlewares/validateRequest'
const router = express.Router()

router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createANewUserDB
)

export default router
