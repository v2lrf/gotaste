import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { withApollo } from 'react-apollo'
import NextLink from 'next/link'

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
  query getBusinessStatistics($slug: String!, $dateInterval: DateInterval!) {
    business(slug: $slug) {
      statistics(dateInterval: $dateInterval) {
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

function CellarPage({ slug, dateInterval }) {
  const { data, loading } = useQuery(GET_BUSINESS_STATISTICS, {
    variables: {
      slug,
      dateInterval
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
                <NextLink href={{ query: { dateInterval: 'TODAY' } }}>
                  <Link className="mr-4">1 dag</Link>
                </NextLink>
                <NextLink href={{ query: { dateInterval: 'LAST_WEEK' } }}>
                  <Link className="mr-4">7 dage</Link>
                </NextLink>
                <NextLink href={{ query: { dateInterval: 'LAST_MONTH' } }}>
                  <Link className="mr-4">30 dage</Link>
                </NextLink>
              </LinkGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="full" sm="1/2" lg="1/3">
              <Card title="Besøgende" textCenter>
                <div className="text-4xl font-semibold b">
                  {statistics.pageVisits.totalCount}
                </div>
              </Card>
            </Col>
            <Col xs="full" sm="1/2" lg="1/3">
              <Card title="Sidevisninger" textCenter>
                <div className="text-4xl font-semibold">
                  {statistics.pageViews.totalCount}
                </div>
              </Card>
            </Col>
            <Col xs="full" sm="1/2" lg="1/3">
              <Card title="Interaktioner" textCenter>
                <div className="text-4xl font-semibold">
                  {statistics.pageViews.totalCount}
                </div>
              </Card>
            </Col>
          </Row>
          <Spacer vertical="12">
            <Row>
              <Col xs="full" sm="1/2">
                <Card title="Begivenheder" textCenter>
                  <div className="text-4xl font-semibold">xxx</div>
                </Card>
              </Col>
              <Col xs="full" sm="1/2">
                <Card title="Anmeldelser" textCenter>
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
    slug,
    dateInterval: context.query.dateInterval
  }
}

CellarPage.propTypes = {
  slug: PropTypes.string.isRequired,
  dateInterval: PropTypes.string
}

CellarPage.defaultProps = {
  dateInterval: 'LAST_MONTH'
}

export default withApollo(CellarPage)
