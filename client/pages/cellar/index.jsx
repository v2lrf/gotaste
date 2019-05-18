import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { withApollo } from 'react-apollo'

import checkLoggedIn, {
  checkOwnerLogin,
  getOwnerSlug,
  checkAdminLogin,
  getAdminBusinessSlug
} from '../../lib/checkLoggedIn'
import redirect from '../../lib/redirect'

import CellarLayout from '../../components/Layout/CellarLayout'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import { Row, Col } from '../../components/Grid'
import Link, { LinkGroup } from '../../components/Link'
import Card from '../../components/Card'

const GET_BUSINESS_STATISTICS = gql`
  query getBusinessStatistics($slug: String!) {
    business(slug: $slug) {
      statistics {
        pageViews {
          totalCount
        }
        pageVisits {
          totalCount
        }
      }
    }
  }
`

function CellarPage({ slug }) {
  const { data, loading } = useQuery(GET_BUSINESS_STATISTICS, {
    variables: {
      slug
    }
  })

  if (loading) return 'loading..'

  const {
    business: { statistics }
  } = data

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
              <Card title="Besøgende">
                <div className="text-4xl font-semibold b">
                  {statistics.pageVisits.totalCount}
                </div>
              </Card>
            </Col>
            <Col xs="full" sm="1/2" lg="1/3">
              <Card title="Sidevisninger">
                <div className="text-4xl font-semibold">
                  {statistics.pageViews.totalCount}
                </div>
              </Card>
            </Col>
            <Col xs="full" sm="1/2" lg="1/3">
              <Card title="Interaktioner">
                <div className="text-4xl font-semibold">
                  {statistics.pageViews.totalCount}
                </div>
              </Card>
            </Col>
          </Row>
          <Spacer vertical="12">
            <Row>
              <Col xs="full" sm="1/2">
                <Card title="Begivenheder">
                  <div className="text-4xl font-semibold">xxx</div>
                </Card>
              </Col>
              <Col xs="full" sm="1/2">
                <Card title="Anmeldelser">
                  <div className="text-4xl font-semibold">xxx</div>
                </Card>
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
  let slug = getOwnerSlug(loggedInUser)

  if (checkAdminLogin(loggedInUser)) {
    const adminSlug = getAdminBusinessSlug(context)
    slug = adminSlug || slug
  }

  return {
    slug
  }
}

CellarPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default withApollo(CellarPage)
