import { z } from 'zod'
const createAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
})

// update validation
const updateAcademicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title have must be given for update',
    }),
  }),
})

export default {
  createAcademicFacultyZodSchema,
  updateAcademicFacultyZodSchema,
}
