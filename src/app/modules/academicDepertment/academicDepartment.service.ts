import { SortOrder } from 'mongoose'
import paginationHelper from '../../../helpers/paginationHelper'
import IPaginationOptions from '../../../interface/paginationOptionsType'
import {
  IAcademicDepartment,
  IAcademicDepartmentFilters,
} from './academicDepartment.interface'
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
// type for pagination
type IGenericResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

const getAllAcademicDepartment = async (
  { searchTerm, ...filterableFields }: IAcademicDepartmentFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicDepartment[]>> => {
  // filters work
  const andConditions = []
  const academicDepartmentSearchField = ['title']
  if (searchTerm) {
    andConditions.push({
      $or: academicDepartmentSearchField.map(filed => ({
        [filed]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filterableFields).length) {
    andConditions.push({
      $and: Object.entries(filterableFields).map(([field, value]) => ({
        [field]: {
          $regex: value,
          $options: 'i',
        },
      })),
    })
  }
  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const result = await AcademicDepartmentModel.find(whereCondition)
    .populate('academicFaculty')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
  const total = await AcademicDepartmentModel.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

// get single department
const getSingleDepartment = async (
  id: string
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartmentModel.findOne({ _id: id }).populate(
    'academicFaculty'
  )
  return result
}

// update single department
const updateSingleDepartment = async (
  id: string,
  payloadData: Partial<IAcademicDepartment>
): Promise<IAcademicDepartment | null> => {
  const result = await AcademicDepartmentModel.findOneAndUpdate(
    { _id: id },
    payloadData,
    {
      new: true,
    }
  )
  return result
}

const deleteDepartment = async (id: string) => {
  const result = await AcademicDepartmentModel.findOneAndDelete({ _id: id })
  return result
}

export default {
  createDepartment,
  getAllAcademicDepartment,
  getSingleDepartment,
  updateSingleDepartment,
  deleteDepartment,
}
