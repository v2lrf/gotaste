import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import config from '../../config'

import NavBar from '../NavBar'
import Footer from '../Footer'

function Layout({ children, title, metaDescription, metaKeywords }) {
  const keywords = config.DEFAULT_META_KEYWORDS.concat(metaKeywords).join(',')
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  metaDescription: PropTypes.string,
  metaKeywords: PropTypes.arrayOf(PropTypes.string)
}

Layout.defaultProps = {
  title: 'Govinu - Smag og gå på opdagelse i vinens verden',
  metaDescription:
    'Find og følg din lokale vinforhandler eller vinbar. Gå på opdagelse i vinens verden, find nye smagninger eller arrangementer og meget mere.',
  metaKeywords: ['']
}

export default Layout
