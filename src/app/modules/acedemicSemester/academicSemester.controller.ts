import { NextFunction, Request, Response } from 'express'
import { academicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import pick from '../../../shared/pick'
import { paginationField } from '../../../constance/paginationField'
import { IAcademicSemester } from './acedemicSemester.interface'
import { academicSemesterFilterableFields } from './academicSemester.constant'

const createNewAcademicSemesterDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const academicInfo = req.body
    const semester = await academicSemesterService.createAcademicSemester(
      academicInfo
    )

    next()
    sendResponse<IAcademicSemester>(res, {
      statusCode: 200,
      success: true,
      message: 'Aademic semester created successfully!',
      data: semester,
    })
  }
)

// academic semester pagination controller
const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicSemesterFilterableFields)
    const paginationOptions = pick(req.query, paginationField)
    const result = await academicSemesterService.getAllSemestersService(
      filters,
      paginationOptions
    )
    next()

    sendResponse<IAcademicSemester[]>(res, {
      success: true,
      message: 'semester retrieve successfully',
      statusCode: 200,
      meta: result.meta,
      data: result.data,
    })
  }
)

export const academicSemesterController = {
  createNewAcademicSemesterDB,
  getAllSemesters,
}
