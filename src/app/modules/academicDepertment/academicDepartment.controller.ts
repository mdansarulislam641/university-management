import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicDepartment } from './academicDepartment.interface'
import { academicDepartmentService } from './academicDepartment.service'
import pick from '../../../shared/pick'
import { paginationField } from '../../../constance/paginationField'

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
    const filters = pick(req.query, ['searchTerm', 'title'])
    const paginationOptions = pick(req.query, paginationField)
    const result = await academicDepartmentService.getAllAcademicDepartment(
      filters,
      paginationOptions
    )
    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: 200,
      success: true,
      message: 'Successfully get all academic department',
      meta: result.meta,
      data: result.data,
    })
  }
)

export const academicDepartmentController = {
  createDepartment,
  getAllAcademicDepartment,
}
