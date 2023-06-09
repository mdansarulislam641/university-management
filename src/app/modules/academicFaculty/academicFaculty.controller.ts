import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicFaculty } from './academicFaculty.interface'
import academicFacultyService from './academicFaculty.service'
import pick from '../../../shared/pick'

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

// get all getAllFaculties
const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title', 'man', 'woman'])
  const paginationOptions = pick(req.query, [
    'page',
    'limit',
    'sortBy',
    'sortOrder',
  ])

  const result = await academicFacultyService.getAllFaculties(
    filters,
    paginationOptions
  )
  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Faculties Retrieve successfully',
    meta: result.meta,
    data: result.data,
  })
})

// get single faculty
const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicFacultyService.getSingleFaculty(id)
  sendResponse<IAcademicFaculty>(res, {
    statusCode: 200,
    success: true,
    message: 'Single Faculty Retrieve successfully',
    data: result,
  })
})

// update single faculty
const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await academicFacultyService.updateFaculty(id, updatedData)
  sendResponse<IAcademicFaculty>(res, {
    statusCode: 200,
    success: true,
    message: 'faculty updated successfully',
    data: result,
  })
})

// delete single faculty
const deleteSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicFacultyService.deleteSingleFaculty(id)
  sendResponse<IAcademicFaculty | null>(res, {
    statusCode: 200,
    success: true,
    message: 'Faculty deleted Successfully',
    data: result,
  })
})

export default {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteSingleFaculty,
}
