import { z } from 'zod'
import { academicSemesterMonths } from './academicSemester.constant'
// zod implementation
const createAcademicSemesterZodSchema = z.object({
  title: z.enum(['Autumn', 'Summer', 'Fall'], {
    required_error: 'title is required',
  }),
  year: z.number({
    required_error: 'title is required',
  }),
  code: z.enum(['01', '02', '03'], {
    required_error: 'code is required',
  }),
  startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
    required_error: 'start month is required',
  }),
  endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
    required_error: 'end month is required',
  }),
})

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
}
