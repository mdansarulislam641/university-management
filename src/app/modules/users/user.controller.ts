import { Request, Response } from 'express'
import usersService from './users.service'

// create a new user
const createANewUserDB = async (req: Request, res: Response) => {
  const userInfo = req.body
  const user = await usersService.createNewUser(userInfo)
  res.status(200).json({
    success: true,
    data: user,
  })
}

export default {
  createANewUserDB,
}
