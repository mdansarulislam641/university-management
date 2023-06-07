import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interface/error'
import { IGenericResponseErrors } from '../interface/common'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericResponseErrors => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(el => {
    return {
      path: el?.path,
      message: el?.message,
    }
  })
  return {
    statusCode: 400,
    message: 'validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError
