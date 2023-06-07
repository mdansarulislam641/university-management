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

// global error handler middleware
app.use(globalErrorHandler)

// testing error
// app.get('/', (req : Request , res : Response, next : NextFunction) =>{
//     // throw new Error ("orebaba erro")
//     next("ore next error");
// })

export default app
