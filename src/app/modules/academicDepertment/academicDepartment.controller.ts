import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicDepartment } from './academicDepartment.interface'
import academicDepartmentService from './academicDepartment.service'
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

// get single department
const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicDepartmentService.getSingleDepartment(id)
  sendResponse<IAcademicDepartment>(res, {
    statusCode: 200,
    success: true,
    message: 'Get Department Successfully',
    data: result,
  })
})

// update single department
const updateSingleDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await academicDepartmentService.updateSingleDepartment(
      id,
      updatedData
    )
    sendResponse<IAcademicDepartment>(res, {
      statusCode: 200,
      success: true,
      message: 'Update department successfully',
      data: result,
    })
  }
)

//delete single department
const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicDepartmentService.deleteDepartment(id)
  sendResponse<IAcademicDepartment>(res, {
    statusCode: 200,
    success: true,
    message: 'Successfully Deleted',
    data: result,
  })
})

export const academicDepartmentController = {
  createDepartment,
  getAllAcademicDepartment,
  getSingleDepartment,
  updateSingleDepartment,
  deleteDepartment,
}
