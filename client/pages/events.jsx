import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'

import EventsPageLoader from '../loaders/events'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import EventCard from '../components/EventCard'
import Button from '../components/Button'

import EventInfoFields from '../fragments/EventInfoFields'

const GET_UPCOMING_EVENTS = gql`
  query getUpcomingEvents($cursor: String) {
    events(
      whenEventBegins: UPCOMING
      orderBy: BEGINS_AT_ASC
      first: 9
      after: $cursor
    ) {
      nodes {
        ...EventInfoFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }

  ${EventInfoFields}
`

function handlePagination(previousResult, fetchMoreResult, setButtonLoading) {
  const newPageInfo = fetchMoreResult.events.pageInfo
  const newNodes = fetchMoreResult.events.nodes
  setButtonLoading(false)
  return {
    events: {
      __typename: previousResult.events.__typename,
      nodes: [...previousResult.events.nodes, ...newNodes],
      pageInfo: {
        ...newPageInfo,
        __typename: previousResult.events.pageInfo.__typename
      }
    }
  }
}

function EventsPage() {
  const { data, loading, fetchMore } = useQuery(GET_UPCOMING_EVENTS)
  const [buttonLoading, setButtonLoading] = useState(false)

  if (loading) return <EventsPageLoader />
  const {
    events,
    events: { pageInfo }
  } = data
  return (
    <Layout>
      <Container>
        <Spacer top="10" bottom="12">
          <h2 className="text-center mb-6 text-red-dark">
            Kommende begivenheder
          </h2>
          <Row>
            {events.nodes.map(event => (
              <Col xs="full" sm="1/2" lg="1/3" key={event.slug}>
                <EventCard {...event} />
              </Col>
            ))}
          </Row>
          <div className="mt-6 text-center">
            {pageInfo.hasNextPage && (
              <Button
                kind="secondary"
                type="button"
                loading={buttonLoading}
                onClick={() => {
                  setButtonLoading(true)
                  fetchMore({
                    variables: {
                      cursor: pageInfo.endCursor
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) =>
                      handlePagination(
                        previousResult,
                        fetchMoreResult,
                        setButtonLoading
                      )
                  })
                }}
              >
                Vis flere begivenheder
              </Button>
            )}
          </div>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default EventsPage
