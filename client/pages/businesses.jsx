import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'

import BusinessesPageLoader from '../loaders/businesses'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import BusinessCard from '../components/BusinessCard'
import Button from '../components/Button'

import BusinessInfoFields from '../fragments/BusinessInfoFields'

const GET_BUSINESSES = gql`
  query getBusinesses($cursor: String) {
    businesses(orderBy: NAME_ASC, first: 9, after: $cursor) {
      nodes {
        ...BusinessInfoFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }

  ${BusinessInfoFields}
`

function handlePagination(previousResult, fetchMoreResult, setButtonLoading) {
  const newPageInfo = fetchMoreResult.businesses.pageInfo
  const newNodes = fetchMoreResult.businesses.nodes
  setButtonLoading(false)
  return {
    businesses: {
      __typename: previousResult.businesses.__typename,
      nodes: [...previousResult.businesses.nodes, ...newNodes],
      pageInfo: {
        ...newPageInfo,
        __typename: previousResult.businesses.pageInfo.__typename
      }
    }
  }
}

function BusinessesPage() {
  const { data, loading, fetchMore } = useQuery(GET_BUSINESSES)
  const [buttonLoading, setButtonLoading] = useState(false)

  if (loading) return <BusinessesPageLoader />
  const {
    businesses,
    businesses: { pageInfo }
  } = data
  return (
    <Layout>
      <Container>
        <Spacer top="10" bottom="12">
          <h2 className="text-center mb-6 text-red-dark">
            Forhandlere og vinbarer
          </h2>
          <Row>
            {businesses.nodes.map(business => (
              <Col xs="full" sm="1/2" lg="1/3" key={business.slug}>
                <BusinessCard {...business} />
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
                Vis flere forhandlere
              </Button>
            )}
          </div>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default BusinessesPage
