import { NextFunction, Request, Response } from 'express'
import { academicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'

const createNewAcademicSemesterDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const academicInfo = req.body
    const semester = await academicSemesterService.createAcademicSemester(
      academicInfo
    )

    next()
    res.status(200).json({
      success: true,
      message: 'academic semester created successfully',
      data: semester,
    })
  }
)

export const academicSemesterController = {
  createNewAcademicSemesterDB,
}
