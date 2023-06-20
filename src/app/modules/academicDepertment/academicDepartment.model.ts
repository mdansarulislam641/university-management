import { Model, Schema, model } from 'mongoose'
import { IAcademicDepartment } from './academicDepartment.interface'

type IAcademicDepartmentModel = Model<
  IAcademicDepartment,
  Record<string, unknown>
>
const academicDepartmentSchema = new Schema<
  IAcademicDepartment,
  IAcademicDepartmentModel
>(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
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

export const AcademicDepartmentModel = model<
  IAcademicDepartment,
  IAcademicDepartmentModel
>('AcademicDepartment', academicDepartmentSchema)
