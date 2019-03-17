const fetch = require('isomorphic-unfetch')
const fs = require('fs')
const path = require('path')

const config = require('../config')

const ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? config.PROD_ENDPOINT
    : config.DEV_ENDPOINT

fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
    query getSchemaTypes {
      __schema {
        types {
          kind
          name
          possibleTypes {
            name
          }
        }
      }
    }
    `
  })
})
  .then(result => result.json())
  .then(result => {
    // Filter out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    )
    /* eslint-disable-next-line */
    result.data.__schema.types = filteredData
    const filePath = path.join(__dirname, 'fragmentTypes.json')
    fs.writeFileSync(filePath, JSON.stringify(result.data))
  })
