import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicDepartment } from './academicDepartment.interface'
import { academicDepartmentService } from './academicDepartment.service'

// create a academic department controller
const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const payloadData = req.body
  const result = await academicDepartmentService.createDepartment(payloadData)
  sendResponse<IAcademicDepartment>(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Department Create successfully',
    data: result,
  })
})

// get all academic Department
const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await academicDepartmentService.getAllAcademicDepartment()
    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: 200,
      success: true,
      message: 'Successfully get all academic department',
      data: result,
    })
  }
)

export const academicDepartmentController = {
  createDepartment,
  getAllAcademicDepartment,
}
