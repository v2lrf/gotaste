import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import { GhostCard, GhostLines } from '../components/Ghost'

function BusinessPageLoader() {
  return (
    <Layout>
      <div className="bg-grey-lighter shadow">
        <Container>
          <Spacer top="12" bottom="12" inner>
            <GhostCard height={64} width={50} />
          </Spacer>
        </Container>
      </div>
      <Container>
        <Spacer top="12" bottom="12" inner>
          <Row>
            <Col xs="full" sm="2/3">
              <GhostCard height={500} />
              <div className="py-4">
                <GhostLines lines={10} />
              </div>
            </Col>
            <Col xs="full" sm="1/3">
              <GhostCard height={290} />
              <div className="mt-6">
                <GhostCard height={290} />
              </div>
            </Col>
          </Row>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default BusinessPageLoader
