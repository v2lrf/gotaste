import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import { GhostCard } from '../components/Ghost'

function BusinessesPageLoader() {
  return (
    <Layout>
      <Container>
        <Spacer top="10" bottom="12">
          <div className="text-center mb-6">
            <GhostCard height={30} width={50} />
          </div>
          <Row>
            {Array(9)
              .fill()
              .map((v, k) => k)
              .map(val => (
                <Col xs="full" sm="1/2" lg="1/3" key={val}>
                  <div className="mb-4">
                    <GhostCard height={260} />
                  </div>
                </Col>
              ))}
          </Row>
          <div className="mt-6 text-center">
            <GhostCard height={30} width={50} />
          </div>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default BusinessesPageLoader
