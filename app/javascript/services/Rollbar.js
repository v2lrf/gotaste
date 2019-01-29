import Rollbar from 'rollbar'

const rollbar = Rollbar.init({
  enabled: `'%NODE_ENV%' === 'production'`,
  accessToken: process.env.ROLLBAR_POST_CLIENT_ITEM,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: process.env.NODE_ENV
  }
})

export default rollbar
