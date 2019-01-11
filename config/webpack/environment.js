const { environment } = require('@rails/webpacker')
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')
const dotenv = require('dotenv')

const dotenvFiles = ['.env']

dotenvFiles.forEach(dotenvFile => {
  dotenv.config({ path: dotenvFile, silent: true })
})

environment.plugins.prepend(
  'Environment',
  new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env)))
)

module.exports = environment
