import React from 'react'
import PropTypes from 'prop-types'
import { BusinessCard } from '../BusinessCard'
import { Row, Col } from '../Grid'
import Routes from '../../services/Routes'

export function AreaRow({ name, businesses }) {
  return (
    <Row>
      <h2 className="text-center mb-6 text-red-dark">{name}</h2>
      {businesses.map(business => (
        <Col xs="full" sm="1/2" lg="1/3" key={business.id}>
          <BusinessCard
            href={Routes.business_path(business.slug)}
            {...business}
          />
        </Col>
      ))}
    </Row>
  )
}

AreaRow.propTypes = {
  name: PropTypes.string.isRequired,
  businesses: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
}

AreaRow.defaultProps = {
  businesses: []
}
export default AreaRow
