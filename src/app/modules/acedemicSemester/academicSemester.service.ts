import { AcademicSemester } from './academicSemester.model'
import { IAcademicSemester } from './acedemicSemester.interface'

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload)
  return result
}

export const academicSemesterService = {
  createAcademicSemester,
}
