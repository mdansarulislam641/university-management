import { NextFunction, Request, RequestHandler, Response } from 'express'
import { UserService } from './users.service'
import catchAsync from '../../../shared/catchAsync'

// create a new user
const createANewUserDB: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userInfo = req.body
    const user = await UserService.createNewUser(userInfo)
    next()
    res.status(200).json({
      success: true,
      data: user,
    })
  }
)

export const UserController = {
  createANewUserDB,
}
