const rootPath = require('app-root-path')
const development = require('./development')
const test = require('./test')
const production = require('./production')

const {
  XARA_NODE_ENV: NODE_ENV
} = process.env

const currentEnv = {
  development,
  test,
  production
}[NODE_ENV || 'development']

module.exports = {
  ...process.env,
  ...currentEnv,
  rootPath
}
