import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { withApollo } from 'react-apollo'
import NextLink from 'next/link'
import moment from 'moment'

import checkLoggedIn, {
  checkOwnerLogin,
  getOwnerSlug
} from '../../lib/checkLoggedIn'
import redirect from '../../lib/redirect'
import { capitalizeFirstLetter } from '../../helpers/textHelpers'

import CellarLayout from '../../components/Layout/CellarLayout'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import { Row, Col } from '../../components/Grid'
import Link, { LinkGroup } from '../../components/Link'
import DateDisplay from '../../components/DateDisplay'

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
    <CellarLayout>
      <Container>
        <Spacer top="12" bottom="20">
          <Row>
            <Col>
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
          {nodes.map(event => (
            <Row key={event.slug}>
              <Col>
                <div className="flex items-center p-4 shadow-md rounded mb-6 hover:bg-grey-lightest hover:shadow-lg">
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
              </Col>
            </Row>
          ))}
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

  return {
    slug: getOwnerSlug(loggedInUser),
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
