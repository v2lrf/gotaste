import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { withApollo } from 'react-apollo'
import NextLink from 'next/link'
import moment from 'moment'

import checkLoggedIn, {
  checkOwnerLogin,
  getOwnerSlug,
  checkAdminLogin,
  getAdminBusinessSlug
} from '../../../lib/checkLoggedIn'
import redirect from '../../../lib/redirect'
import { capitalizeFirstLetter } from '../../../helpers/textHelpers'

import CellarLayout from '../../../components/Layout/CellarLayout'
import Container from '../../../components/Container'
import Spacer from '../../../components/Spacer'
import Button from '../../../components/Button'
import Link, { LinkGroup } from '../../../components/Link'
import DateDisplay from '../../../components/DateDisplay'
import { Row, Col } from '../../../components/Grid'

const GET_EVENTS = gql`
  query getEvents($slug: String!, $whenEventBegins: EventBeginsEnum!) {
    business(slug: $slug) {
      events(whenEventBegins: $whenEventBegins) {
        nodes {
          name
          beginsAt
          slug
        }
      }
    }
  }
`

function CellarEventsPage({ slug, whenEventBegins }) {
  const { data, loading } = useQuery(GET_EVENTS, {
    variables: {
      whenEventBegins,
      slug
    }
  })
  if (loading) return 'loading..'
  const {
    business: {
      events: { nodes }
    }
  } = data
  return (
    <CellarLayout title="GoTaste Cellar - Begivenheder">
      <Container>
        <Spacer top="12" bottom="20">
          <Row className="mb-6">
            <Col xs="full" sm="1/2">
              <NextLink href="/cellar/events/new">
                <Button type="button" kind="primary">
                  Opret ny begivenhed
                </Button>
              </NextLink>
            </Col>
            <Col xs="full" sm="1/2">
              <LinkGroup label="Begivenheder fra:">
                <NextLink href={{ query: { whenEventBegins: 'UPCOMING' } }}>
                  <Link className="mr-4">Kommende</Link>
                </NextLink>
                <NextLink href={{ query: { whenEventBegins: 'PAST' } }}>
                  <Link>Tidligere</Link>
                </NextLink>
              </LinkGroup>
            </Col>
          </Row>
          {nodes.length ? (
            nodes.map(event => (
              <div
                className="flex items-center p-4 shadow-md rounded mb-6 hover:bg-grey-lightest hover:shadow-lg"
                key={event.slug}
              >
                <DateDisplay timestamp={event.beginsAt} />
                <div className="flex-grow ml-4">
                  <span className="text-grey-dark text-sm">
                    {capitalizeFirstLetter(
                      moment(event.beginsAt).format('LLLL')
                    )}
                  </span>
                  <h2 className="text-red-darker">{event.name}</h2>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-red-dark text-center mt-12">
              Der er desværre ikke nogle begivenheder endnu.
            </h3>
          )}
        </Spacer>
      </Container>
    </CellarLayout>
  )
}

CellarEventsPage.getInitialProps = async context => {
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
    whenEventBegins: context.query.whenEventBegins
  }
}

CellarEventsPage.propTypes = {
  slug: PropTypes.string.isRequired,
  whenEventBegins: PropTypes.string
}

CellarEventsPage.defaultProps = {
  whenEventBegins: 'UPCOMING'
}

export default withApollo(CellarEventsPage)
