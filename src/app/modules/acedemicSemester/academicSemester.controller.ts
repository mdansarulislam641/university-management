import { Request, Response } from 'express'
import { academicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import pick from '../../../shared/pick'
import { paginationField } from '../../../constance/paginationField'
import { IAcademicSemester } from './acedemicSemester.interface'
import { academicSemesterFilterableFields } from './academicSemester.constant'

const createNewAcademicSemesterDB = catchAsync(
  async (req: Request, res: Response) => {
    const academicInfo = req.body
    const semester = await academicSemesterService.createAcademicSemester(
      academicInfo
    )
    sendResponse<IAcademicSemester>(res, {
      statusCode: 200,
      success: true,
      message: 'Aademic semester created successfully!',
      data: semester,
    })
  }
)

// academic semester pagination controller
const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterableFields)
  const paginationOptions = pick(req.query, paginationField)
  const result = await academicSemesterService.getAllSemestersService(
    filters,
    paginationOptions
  )
  sendResponse<IAcademicSemester[]>(res, {
    success: true,
    message: 'semester retrieve successfully',
    statusCode: 200,
    meta: result.meta,
    data: result.data,
  })
})

// get single semester controller
const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicSemesterService.getSingleSemesterService(id)
  sendResponse<IAcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: result?.title
      ? 'semester retrieve successfully!'
      : 'No data Found',
    data: result,
  })
})

// update single semester
const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await academicSemesterService.updatedSemester(id, updatedData)
  sendResponse<IAcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester Updated successfully!',
    data: result,
  })
})

// delete semester controller
const deleteSemester = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicSemesterService.deleteSemester(id)
  sendResponse<IAcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester Deleted successfully!',
    data: result,
  })
}

export const academicSemesterController = {
  createNewAcademicSemesterDB,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
}
