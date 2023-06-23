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

// update department validation
const updateDepartmentValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    academicFaculty: z.string().optional(),
  }),
})

export const academicDepartmentZodSchema = {
  createAcademicDepartmentZodSchema,
  updateDepartmentValidation,
}
