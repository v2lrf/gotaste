import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BusinessCard } from '../BusinessCard'
import { Row, Col } from '../Grid'
import Routes from '../../services/Routes'

export function AreaRow({ name, businesses }) {
  return (
    <Fragment>
      <h2 className="text-center mb-6 text-red-dark">{name}</h2>
      <Row>
        {businesses.map(business => (
          <Col xs="full" sm="1/2" lg="1/3" key={business.id}>
            <BusinessCard
              href={Routes.business_path(business.slug)}
              {...business}
            />
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
      streetName: PropTypes.string.isRequired,
      streetNumber: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired
    })
  )
}

AreaRow.defaultProps = {
  businesses: []
}
export default AreaRow
