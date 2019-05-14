import React from 'react'
import { withApollo } from 'react-apollo'

import checkLoggedIn, { checkOwnerLogin } from '../../lib/checkLoggedIn'
import redirect from '../../lib/redirect'

import CellarLayout from '../../components/Layout/CellarLayout'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import { Row, Col } from '../../components/Grid'
import Link, { LinkGroup } from '../../components/Link'
import Card from '../../components/Card'

function CellarPage() {
  return (
    <CellarLayout>
      <Container>
        <Spacer top="12" bottom="20">
          <Row>
            <Col>
              <LinkGroup label="Seneste:">
                <Link className="mr-4">1 dag</Link>
                <Link className="mr-4">7 dage</Link>
                <Link>30 dage</Link>
              </LinkGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="full" sm="1/2" lg="1/3">
              <Card title="Besøgende">xxx</Card>
            </Col>
            <Col xs="full" sm="1/2" lg="1/3">
              <Card title="Sidevisninger">xxx</Card>
            </Col>
            <Col xs="full" sm="1/2" lg="1/3">
              <Card title="Interaktioner">xxx</Card>
            </Col>
          </Row>
          <Spacer vertical="12">
            <Row>
              <Col xs="full" sm="1/2">
                <Card title="Begivenheder">xxx</Card>
              </Col>
              <Col xs="full" sm="1/2">
                <Card title="Anmeldelser">xxx</Card>
              </Col>
            </Row>
          </Spacer>
        </Spacer>
      </Container>
    </CellarLayout>
  )
}

CellarPage.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)
  if (!checkOwnerLogin(loggedInUser)) {
    redirect(context, '/')
  }

  return {}
}

export default withApollo(CellarPage)
