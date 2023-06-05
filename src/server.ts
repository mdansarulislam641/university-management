import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('DATABASE Connected')
    app.listen(config.port, () => {
      logger.info(`Application app listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    errorLogger.error(`server connection failed ${error}`)
  }
}

bootstrap()
