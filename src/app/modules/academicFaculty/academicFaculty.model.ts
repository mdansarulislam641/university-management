import { Model, Schema, model } from 'mongoose'
import { IAcademicFaculty } from './academicFaculty.interface'

type IAcademicFacultyModel = Model<IAcademicFaculty, Record<string, unknown>>

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const AcademicSemesterModel = model<
  IAcademicFaculty,
  IAcademicFacultyModel
>('AcademicFaculty', academicFacultySchema)
