import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import Rollbar from '../services/Rollbar'

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      Rollbar.error(
        `[GraphQL Error] Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${path}`
      )
    })
  }

  if (networkError) {
    Rollbar.error(
      `[Network error ${networkError.message}] Operation: ${
        operation.operationName
      }`
    )
  }
})
const httpLink = new HttpLink({ uri: '/graphql' })

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, httpLink])
})

export default client
