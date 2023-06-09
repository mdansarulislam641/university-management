import express, { Application } from 'express'
import cors from 'cors'
import userRoutes from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

// middleware
app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRoutes)

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
