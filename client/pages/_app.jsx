import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import moment from 'moment'
/* eslint-disable-next-line */
import withApollo from '../lib/withApollo'

import '../styles/styles.css'

moment.locale('da')

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
