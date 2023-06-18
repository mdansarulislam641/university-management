// create faculty service
const createFaculty = async (payload: string) => {
  const result = await AcademicFacultyModel.create(payload)
  return result
}

export const academicFacultyService = {
  createFaculty,
}
