import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import NavBar from '../NavBar'
import Container from '../Container'
import Footer from '../Footer'

function Layout({ children, title }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

Layout.defaultProps = {
  title: 'Govinu'
}

export default Layout
