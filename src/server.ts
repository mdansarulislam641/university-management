import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('DATABASE Connected')
    app.listen(config.port, () => {
      console.log(`Application app listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(`server connection failed ${error}`)
  }
}

bootstrap()
