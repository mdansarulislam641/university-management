import ApiError from '../../../errors/ApiError'
import IPaginationOptions from '../../../interface/paginationOptionsType'
import { academicSemesterCodeMapper } from './academicSemester.constant'
import { AcademicSemester } from './academicSemester.model'
import { IAcademicSemester } from './acedemicSemester.interface'

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(400, 'Invalid semester code')
  }
  const result = await AcademicSemester.create(payload)
  return result
}

type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

// get all semester service
const getAllSemestersService = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page = 1, limit = 10 } = paginationOptions
  const skip = (page - 1) * limit
  const result = await AcademicSemester.find().sort().skip(skip).limit(limit)
  const total = await AcademicSemester.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

export const academicSemesterService = {
  createAcademicSemester,
  getAllSemestersService,
}
