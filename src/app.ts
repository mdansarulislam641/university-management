import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/routes'

const app: Application = express()

// middleware
app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router)

// testing error
// app.get('/',  async(req : Request , res : Response, next : NextFunction) =>{
//     // throw new Error ("orebaba erro this")
//     // Promise.reject(new Error("unhandle rejection") )
//     console.log(x)

//     // next("ore next error");
// })
// global error handler middleware
app.use(globalErrorHandler)

export default app
