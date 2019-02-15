require('dotenv').config()
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    ALGOLIA_PLACES_APP_ID: process.env.ALGOLIA_PLACES_APP_ID,
    ALGOLIA_PLACES_API_KEY: process.env.ALGOLIA_PLACES_API_KEY,
    MAP_BOX_API_KEY: process.env.MAP_BOX_API_KEY
  }
})
