import {
  ApolloClient,
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { createPersistedQueryLink } from 'apollo-link-persisted-queries'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'

/* eslint-disable-next-line */
import introspectionQueryResultData from './fragmentTypes.json'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
})

function create(initialState, { getToken }) {
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_URI,
    credentials: 'same-origin'
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(createPersistedQueryLink().concat(httpLink)),
    cache: new InMemoryCache({ fragmentMatcher }).restore(initialState || {}),
    name: `web-${process.env.NODE_ENV}`
  })
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
