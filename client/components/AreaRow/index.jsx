import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import BusinessCard from '../BusinessCard'
import { Row, Col } from '../Grid'

function AreaRow({ name, businesses }) {
  return (
    <Fragment>
      <h3 className="text-center mb-4 text-red-darker">{name}</h3>
      <Row>
        {businesses.map(business => (
          <Col xs="full" sm="1/2" lg="1/3" key={business.id}>
            <BusinessCard {...business} />
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

AreaRow.propTypes = {
  name: PropTypes.string.isRequired,
  businesses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.shape({
        streetName: PropTypes.string.isRequired,
        streetNumber: PropTypes.string.isRequired,
        postalCode: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired
      }).isRequired,
      slug: PropTypes.string.isRequired
    })
  )
}

AreaRow.defaultProps = {
  businesses: []
}

export default AreaRow
