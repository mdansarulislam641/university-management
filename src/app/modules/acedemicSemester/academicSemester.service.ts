import ApiError from '../../../errors/ApiError'
import paginationHelper from '../../../helpers/paginationHelper'
import IPaginationOptions from '../../../interface/paginationOptionsType'
import { academicSemesterCodeMapper } from './academicSemester.constant'
import { AcademicSemester } from './academicSemester.model'
import {
  IAcademicSemester,
  IAcademicSemesterSearch,
} from './acedemicSemester.interface'
import { SortOrder } from 'mongoose'

// semester create
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
  { searchTerm, ...filterFields }: IAcademicSemesterSearch,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const andConditions = []

  const searchTermFields = ['title', 'code', 'year']
  if (searchTerm) {
    andConditions.push({
      $or: searchTermFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filterFields).length) {
    andConditions.push({
      $and: Object.entries(filterFields).map(([field, value]) => ({
        [field]: {
          $regex: value,
          $options: 'i',
        },
      })),
    })
  }

  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}

  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         title: {
  //           $regex: filters.searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         code: {
  //           $regex: filters.searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         year: {
  //           $regex: filters.searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //     ],
  //   },
  // ]

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper(paginationOptions)
  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const result = await AcademicSemester.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
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

// single semester get service
const getSingleSemesterService = async (
  id: string
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSemester.findById(id)
  return result
}

// single semester update
const updatedSemester = async (
  id: string,
  data: Partial<IAcademicSemester>
): Promise<IAcademicSemester | null> => {
  if (
    data.title &&
    data.code &&
    academicSemesterCodeMapper[data.title] !== data.code
  ) {
    throw new ApiError(400, 'Invalid semester code')
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, data, {
    new: true,
  })
  return result
}

export const academicSemesterService = {
  createAcademicSemester,
  getAllSemestersService,
  getSingleSemesterService,
  updatedSemester,
}
