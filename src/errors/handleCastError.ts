import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interface/error'

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'invalid Id',
    },
  ]
  return {
    statusCode: 400,
    message: 'Cast Error',
    errorMessages: errors,
  }
}

export default handleCastError
