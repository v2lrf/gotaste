import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container } from '../components/Container'
import { NavBar } from '../components/NavBar'

const BusinessPage = ({ business }) => (
  <Fragment>
    <NavBar />
    <Container>
      <h1>{business.name}</h1>
      <div>
        <span>{business.address}</span>
      </div>
    </Container>
  </Fragment>
)

BusinessPage.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired
}

export default BusinessPage
