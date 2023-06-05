import express from 'express'
import usersController from './user.controller'
const router = express.Router()

router.post('/create-student', usersController.createANewUserDB)

export default router
