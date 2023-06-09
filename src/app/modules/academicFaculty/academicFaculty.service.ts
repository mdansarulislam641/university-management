import { SortOrder } from 'mongoose'
import paginationHelper from '../../../helpers/paginationHelper'
import IPaginationOptions from '../../../interface/paginationOptionsType'
import {
  IAcademicFaculty,
  IFilterableFields,
} from './academicFaculty.interface'
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
  { searchTerm, ...filterFields }: IFilterableFields,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  const andConditions = []
  const academicFacultySearchFields = ['title']
  if (searchTerm) {
    andConditions.push({
      $or: academicFacultySearchFields.map(filed => ({
        [filed]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filterFields).length) {
    andConditions.push({
      $and: Object.entries(filterFields).map(([key, value]) => ({
        [key]: {
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
  const result = await AcademicSemesterModel.find(whereCondition)
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

// get single faculty
const getSingleFaculty = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicSemesterModel.findOne({ _id: id })
  return result
}

// update single faculty
const updateFaculty = async (
  id: string,
  data: Partial<IAcademicFaculty>
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  )
  return result
}

// delete single faculty
const deleteSingleFaculty = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicSemesterModel.findOneAndDelete({ _id: id })
  return result
}

export default {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteSingleFaculty,
}
