import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import { GhostCard, GhostLines } from '../components/Ghost'

function EventPageLoader() {
  return (
    <Layout>
      <div className="bg-grey-lighter shadow">
        <Container>
          <Spacer top="12" bottom="12" inner>
            <Row>
              <Col xs="full" sm="2/3" lg="3/4">
                <GhostCard height={70} />
              </Col>
              <Col xs="full" sm="1/3" lg="1/4">
                <GhostCard height={70} />
              </Col>
            </Row>
          </Spacer>
        </Container>
      </div>
      <Container>
        <Spacer top="12" bottom="12" inner>
          <Row>
            <Col xs="full" sm="2/3">
              <GhostCard height={300} />
              <div className="py-4">
                <GhostLines lines={10} />
              </div>
            </Col>
            <Col xs="full" sm="1/3">
              <GhostCard height={400} />
            </Col>
          </Row>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default EventPageLoader
