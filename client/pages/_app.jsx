import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
/* eslint-disable-next-line */
import withApollo from '../lib/withApollo'

import '../styles/styles.css'

class GovinuApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(GovinuApp)
