import React, { Fragment } from 'react'

import { Col, Row } from '../components/Grid'
import { GhostCard } from '../components/Ghost'

function IndexPageLoader() {
  return Array(3)
    .fill()
    .map((v, k) => k)
    .map(val => (
      <Fragment key={val}>
        <div className="mb-4">
          <GhostCard height={20} />
        </div>
        <Row>
          {Array(3)
            .fill()
            .map((v, k) => k)
            .map(value => (
              <Col xs="full" sm="1/2" lg="1/3" key={value}>
                <div className="mb-4">
                  <GhostCard height={210} />
                </div>
              </Col>
            ))}
        </Row>
      </Fragment>
    ))
}

export default IndexPageLoader
