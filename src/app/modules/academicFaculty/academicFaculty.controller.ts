import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicFaculty } from './academicFaculty.interface'
import { academicFacultyService } from './academicFaculty.service'

// create faculty
const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const facultyInfo = req.body
  const result = await academicFacultyService.createFaculty(facultyInfo)
  sendResponse<IAcademicFaculty>(res, {
    statusCode: 200,
    success: true,
    message: 'Faculty created successfully',
    data: result,
  })
})

export const academicFacultyController = {
  createFaculty,
}
