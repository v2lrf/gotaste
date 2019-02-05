const webpack = require('webpack')

module.exports = (baseConfig, env, defaultConfig) => {
  /**
   * Because we can't rely on Rails exporting our routes when running Storybook we have to mock them
   * This will listen for all Routes imports and proxy that to our Routes mock service
   */
  defaultConfig.plugins.push(
    new webpack.NormalModuleReplacementPlugin(/services\/Routes/, function(
      resource
    ) {
      resource.request = resource.request.replace('Routes', '__mocks__/Routes')
      return resource
    })
  )

  return defaultConfig
}
