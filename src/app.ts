import express, { Application } from 'express'
import cors from 'cors'
import userRoutes from './app/modules/users/users.route'
const app: Application = express()

// middleware
app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRoutes)
export default app
