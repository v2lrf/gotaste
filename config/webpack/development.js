process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')
const dotenv = require('dotenv')
const environment = require('./environment')

const dotenvFiles = ['.env']

dotenvFiles.forEach(dotenvFile => {
  dotenv.config({ path: dotenvFile, silent: true })
})

environment.plugins.prepend(
  'Environment',
  new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env)))
)

module.exports = environment.toWebpackConfig()
