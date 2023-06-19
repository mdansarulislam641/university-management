import { SortOrder } from 'mongoose'
import paginationHelper from '../../../helpers/paginationHelper'
import IPaginationOptions from '../../../interface/paginationOptionsType'
import { IAcademicFaculty } from './academicFaculty.interface'
import { AcademicSemesterModel } from './academicFaculty.model'

// create faculty service
const createFaculty = async (payload: string): Promise<IAcademicFaculty> => {
  const result = await AcademicSemesterModel.create(payload)
  return result
}

// type for pagination
type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

// get all faculties
const getAllFaculties = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper(paginationOptions)
  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const result = await AcademicSemesterModel.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
  const total = await AcademicSemesterModel.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

export const academicFacultyService = {
  createFaculty,
  getAllFaculties,
}
