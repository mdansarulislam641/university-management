import { NextFunction, Request, Response } from 'express'
import { academicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

const createNewAcademicSemesterDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const academicInfo = req.body
    const semester = await academicSemesterService.createAcademicSemester(
      academicInfo
    )

    next()

    sendResponse(res, {
      success: true,
      message: 'academic semester created successfully',
      statusCode: 200,
      data: semester,
    })
  }
)

export const academicSemesterController = {
  createNewAcademicSemesterDB,
}
