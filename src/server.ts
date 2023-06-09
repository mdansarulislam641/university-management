import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', () => {
  errorLogger.error('uncaughtException Detected')
  process.exit(1)
})

let server: Server
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('DATABASE Connected')
    server = app.listen(config.port, () => {
      logger.info(`Application app listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    errorLogger.error(`server connection failed ${error}`)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

process.on('SIGTERM', () => {
  logger.info('SIGTERM is Received')
  if (server) {
    server.close()
  }
})

bootstrap()
