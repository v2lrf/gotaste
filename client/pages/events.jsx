import React, { Fragment } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import GhostCard from '../components/GhostCard'
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

function Events() {
  return (
    <Layout>
      <Container>
        <Spacer top="10" bottom="12">
          <Query query={GET_UPCOMING_EVENTS}>
            {({ loading, error, data, fetchMore }) => {
              if (error) return `Error! ${error.message}`
              return (
                <Fragment>
                  <h2 className="text-center mb-6 text-red-dark">
                    Kommende begivenheder
                  </h2>
                  <Row>
                    {loading
                      ? Array(9)
                          .fill()
                          .map((v, k) => k)
                          .map(val => (
                            <Col xs="full" sm="1/2" lg="1/3" key={val}>
                              <GhostCard width={380} height={265} />
                            </Col>
                          ))
                      : data.events.nodes.map(event => (
                          // Prettier and Eslint seems to disagree on how this
                          // should be indented
                          // eslint-disable-next-line react/jsx-indent
                          <Col xs="full" sm="1/2" lg="1/3" key={event.slug}>
                            <EventCard {...event} />
                          </Col>
                        ))}
                  </Row>
                  <div className="mt-6 text-center">
                    {!loading && data.events.pageInfo.hasNextPage && (
                      <Button
                        kind="secondary"
                        type="button"
                        onClick={() =>
                          fetchMore({
                            variables: {
                              cursor: data.events.pageInfo.endCursor
                            },
                            updateQuery: (
                              previousResult,
                              { fetchMoreResult }
                            ) => {
                              const newPageInfo =
                                fetchMoreResult.events.pageInfo
                              const newNodes = fetchMoreResult.events.nodes
                              return {
                                events: {
                                  __typename: previousResult.events.__typename,
                                  nodes: [
                                    ...previousResult.events.nodes,
                                    ...newNodes
                                  ],
                                  pageInfo: {
                                    ...newPageInfo,
                                    __typename:
                                      previousResult.events.pageInfo.__typename
                                  }
                                }
                              }
                            }
                          })
                        }
                      >
                        Vis flere begivenheder
                      </Button>
                    )}
                  </div>
                </Fragment>
              )
            }}
          </Query>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default Events
