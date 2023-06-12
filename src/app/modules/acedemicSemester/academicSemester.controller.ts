import { RequestHandler } from 'express'
import { academicSemesterService } from './academicSemester.service'

const createNewAcademicSemesterDB: RequestHandler = async (req, res, next) => {
  try {
    const academicInfo = req.body
    const semester = await academicSemesterService.createAcademicSemester(
      academicInfo
    )
    res.status(200).json({
      success: true,
      message: 'academic semester created successfully',
      data: semester,
    })
  } catch (error) {
    next(error)
  }
}

export const academicSemesterController = {
  createNewAcademicSemesterDB,
}
