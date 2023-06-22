import { IAcademicDepartment } from './academicDepartment.interface'
import { AcademicDepartmentModel } from './academicDepartment.model'

// create a academic department service
const createDepartment = async (
  payload: IAcademicDepartment
): Promise<IAcademicDepartment> => {
  const result = (await AcademicDepartmentModel.create(payload)).populate(
    'academicFaculty'
  )
  return result
}

// get all academic department
const getAllAcademicDepartment = async () => {
  const result = await AcademicDepartmentModel.find()
  return result
}

export const academicDepartmentService = {
  createDepartment,
  getAllAcademicDepartment,
}
