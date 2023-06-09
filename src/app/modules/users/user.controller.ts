import { RequestHandler } from 'express'
import { UserService } from './users.service'

// create a new user
const createANewUserDB: RequestHandler = async (req, res, next) => {
  try {
    const userInfo = req.body
    const user = await UserService.createNewUser(userInfo)
    res.status(200).json({
      success: true,
      data: user,
    })
  } catch (error) {
    // res.status(400).json({
    //   success : false ,
    //   message : "failed to create student"
    // })
    // next("failed create")
    next(error)
  }
}

export const UserController = {
  createANewUserDB,
}
