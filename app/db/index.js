const mongoose = require('mongoose')
const config = require('../../config/env')
mongoose.connect(config.DATABASE_URL).then(() => {
  logger.info('Connected to database')
}).catch(err => {
  logger.info(`error connecting to database, ${err.message}`)
})

const db = mongoose.connection

module.exports = db
