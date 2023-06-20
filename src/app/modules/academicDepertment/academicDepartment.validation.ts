import { z } from 'zod'
const createAcademicDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    academicFaculty: z.string({
      required_error: 'Academic Faculty is required',
    }),
  }),
})

export const academicDepartmentZodSchema = {
  createAcademicDepartmentZodSchema,
}
