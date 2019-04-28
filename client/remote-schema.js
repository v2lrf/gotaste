const { HttpLink } = require('apollo-link-http')
const { setContext } = require('apollo-link-context')
const fetch = require('isomorphic-unfetch')
const {
  makeRemoteExecutableSchema,
  introspectSchema
} = require('apollo-server-express')

async function createRemoteSchema({ uri }) {
  const httpLink = new HttpLink({ uri, fetch })
  const schema = await introspectSchema(httpLink)

  const link = setContext((request, previousContext) => ({
    headers: {
      Authorization: previousContext.graphqlContext.token
    }
  })).concat(httpLink)

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link
  })

  return executableSchema
}

module.exports = createRemoteSchema
