import { ZodError, ZodIssue } from 'zod'
import { IGenericResponseErrors } from '../interface/common'
import { IGenericErrorMessage } from '../interface/error'

const validateZodError = (error: ZodError): IGenericResponseErrors => {
  console.log(error)
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    }
  })
  const statusCode = 400
  return {
    statusCode,
    message: 'validation Error',
    errorMessages: errors,
  }
}

export default validateZodError
