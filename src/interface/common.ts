import { IGenericErrorMessage } from './error'

export type IGenericResponseErrors = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessage[]
}
