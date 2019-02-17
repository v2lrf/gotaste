module.exports = {
  client: {
    name: 'Govinu',
    service: {
      endpoint: {
        localSchemaFile: './app/graphql/schema.graphql'
      }
    },
    includes: ['client/**/*']
  }
}
