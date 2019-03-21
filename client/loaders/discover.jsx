import React from 'react'

import { Col } from '../components/Grid'
import { GhostCard } from '../components/Ghost'

function DiscoverPageLoader() {
  return Array(9)
    .fill()
    .map((v, k) => k)
    .map(val => (
      <Col xs="full" sm="1/2" lg="1/3" key={val}>
        <div className="mb-4">
          <GhostCard height={210} />
        </div>
      </Col>
    ))
}

export default DiscoverPageLoader
