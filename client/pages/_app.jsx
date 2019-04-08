import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import moment from 'moment'
/* eslint-disable-next-line */
import withApollo from '../lib/withApollo'
import ahoy from '../lib/ahoy'

import '../styles/styles.css'

moment.locale('da')

Router.events.on('routeChangeComplete', () => {
  setTimeout(() => {
    ahoy.trackAll()
  }, 2000)
})

class GovinuApp extends App {
  componentDidMount() {
    ahoy.trackAll()
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(GovinuApp)
