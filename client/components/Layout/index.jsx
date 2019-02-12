import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import NavBar from '../NavBar'
import Footer from '../Footer'

function Layout({ children, title }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      {children}
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
