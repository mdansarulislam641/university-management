import ApiError from '../../../errors/ApiError'
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

export const academicSemesterService = {
  createAcademicSemester,
}
