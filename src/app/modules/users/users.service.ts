import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateFacultyId } from './users.utils'

// auto generated id
// default password

const createNewUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateFacultyId()
  user.id = id
  if (!user.password) {
    user.password = config.default_student_password as string
  }

  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user')
  }
  return createUser
}

export const UserService = {
  createNewUser,
}
