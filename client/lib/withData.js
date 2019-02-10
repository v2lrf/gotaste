import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import fetch from 'isomorphic-unfetch'
import withApollo from 'next-with-apollo'
import rollbar from '../services/Rollbar'

if (!process.browser) {
  global.fetch = fetch
}

const DEV_ENDPOINT = 'http://localhost:4000/graphql'
const PROD_ENDPOINT = 'https://api.govinu.com/graphql'

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      rollbar.error(
        `[GraphQL Error] Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${path}`
      )
    })
  }

  if (networkError) {
    rollbar.error(
      `[Network error ${networkError.message}] Operation: ${
        operation.operationName
      }`
    )
  }
})

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === 'production' ? PROD_ENDPOINT : DEV_ENDPOINT
})

const cache = new InMemoryCache()

const client = () =>
  new ApolloClient({
    cache,
    link: ApolloLink.from([errorLink, httpLink])
  })

export default withApollo(client)
