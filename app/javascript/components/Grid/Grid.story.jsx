import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Row, Col } from './index'

storiesOf('Grid', module).add('Default', () => (
  <Fragment>
    <div className="p-16">
      <h2 className="mb-4">Three column grid</h2>
      <Row>
        <Col width="1/3">
          <div className="bg-grey-light h-12" />
        </Col>
        <Col width="1/3">
          <div className="bg-grey-light h-12" />
        </Col>
        <Col width="1/3">
          <div className="bg-grey-light h-12" />
        </Col>
      </Row>
    </div>
    <div className="p-16">
      <h2 className="mb-4">Grid column with offset</h2>
      <Row>
        <Col offset width="1/2">
          <div className="bg-grey-light h-12" />
        </Col>
      </Row>
    </div>
  </Fragment>
))
