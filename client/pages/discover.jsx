import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import config from '../config'

import BusinessInfoFields from '../fragments/BusinessInfoFields'

import DiscoverPageLoader from '../loaders/discover'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import BusinessCard from '../components/BusinessCard'
import { Row, Col } from '../components/Grid'
/* eslint-disable-next-line */
import SearchBar from '../components/SearchBar'

const SEARCH_FOR_BUSINESSES = gql`
  query searchForBusinesses(
    $latitude: Float!
    $longitude: Float!
    $distance: Int!
  ) {
    search(latitude: $latitude, longitude: $longitude, distance: $distance) {
      nodes {
        ... on Business {
          ...BusinessInfoFields
        }
      }
    }
  }

  ${BusinessInfoFields}
`

function Discover({ latitude, longitude }) {
  const [geoData, setGeoData] = useState({
    latitude,
    longitude
  })
  return (
    <Layout>
      <div className="bg-grey-lighter shadow">
        <Container>
          <Spacer top="12" bottom="12" inner>
            <Row>
              <Col xs="full" md="1/2" offset>
                <h3 className="text-center mb-4 text-red-darkest">
                  Hvor vil du gå på opdagelse henne?
                </h3>
                <SearchBar onChange={latlng => setGeoData(latlng)} />
              </Col>
            </Row>
          </Spacer>
        </Container>
      </div>
      <Container>
        <Spacer top="10" bottom="12">
          <Row>
            <Query
              query={SEARCH_FOR_BUSINESSES}
              variables={{
                latitude: geoData.latitude,
                longitude: geoData.longitude,
                distance: config.DEFAULT_DISTANCE
              }}
            >
              {({ loading, data }) => {
                if (loading) return <DiscoverPageLoader />
                if (data.search.nodes.length === 0)
                  return (
                    <div className="mx-auto">
                      Vi fandt desværre ikke nogle forhandlere i dit område,
                      prøv at søge efter et nyt ovenfor
                      <span role="img" aria-label="ovenfor" aria-hidden>
                        ☝️
                      </span>
                    </div>
                  )
                return data.search.nodes
                  .filter(node => Boolean(node.id))
                  .map(node => {
                    const { id } = node
                    return (
                      <Col xs="full" sm="1/2" lg="1/3" key={id}>
                        <BusinessCard {...node} />
                      </Col>
                    )
                  })
              }}
            </Query>
          </Row>
        </Spacer>
      </Container>
    </Layout>
  )
}

Discover.getInitialProps = ({ query }) => ({
  latitude: parseFloat(query.latitude || config.DEFAULT_LATITUDE),
  longitude: parseFloat(query.longitude || config.DEFAULT_LONGITUDE)
})

Discover.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
}

export default Discover
