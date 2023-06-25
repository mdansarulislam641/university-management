import { IAcademicSemester } from '../acedemicSemester/acedemicSemester.interface'
import { User } from './users.model'

const findLastStudentId = async () => {
  const lastUser = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id ? lastUser.id.substring(4) : undefined
}

export const generateStudentId = async (userInfo: IAcademicSemester) => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0')
  let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementalId = `${userInfo.year.substring(2)}${
    userInfo.code
  }${incrementalId}`
  return incrementalId.toString()
}

// get faculty
const findLastFacultyId = async () => {
  const lastFaculty = await User.findOne(
    {
      role: 'faculty',
    },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined
}
// faculty id generate
export const generateFacultyId = async () => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0')
  let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementalId = `F-${incrementalId}`
  return incrementalId
}
