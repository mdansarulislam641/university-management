import { Response } from 'express'

// type for response
type IApiResponse<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  data?: T | null
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseApi: IApiResponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || null,
    data: data.data || null,
  }
  res.status(data.statusCode).json(responseApi)
}
export default sendResponse
