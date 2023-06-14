import { NextFunction, Request, RequestHandler, Response } from 'express'
import { UserService } from './users.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

// create a new user
const createANewUserDB: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userInfo = req.body
    const user = await UserService.createNewUser(userInfo)
    next()

    sendResponse(res, {
      success: true,
      message: 'academic semester created successfully',
      statusCode: 200,
      data: user,
    })
  }
)

export const UserController = {
  createANewUserDB,
}
