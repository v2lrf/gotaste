import React, { useState } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import BusinessInfoFields from '../fragments/BusinessInfoFields'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import BusinessCard from '../components/BusinessCard'
import { Row, Col } from '../components/Grid'
/* eslint-disable-next-line */
import SearchBar from '../components/SearchBar'

const DEFAULT_LATITUDE = '55.6753'
const DEFAULT_LONGITUDE = '12.5703'

const SEARCH_FOR_BUSINESSES = gql`
  query searchForBusinesses($latitude: Float!, $longitude: Float!) {
    businessSearch(latitude: $latitude, longitude: $longitude, distance: 2000) {
      nodes {
        ...BusinessInfoFields
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
                <h3 className="text-center mb-4">
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
                longitude: geoData.longitude
              }}
            >
              {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`
                if (data.businessSearch.nodes.length === 0)
                  return (
                    <div className="mx-auto">
                      Vi fandt desværre ikke nogle forhandlere i dit område,
                      prøv at søge efter et nyt ovenfor
                      <span role="img" aria-label="ovenfor" aria-hidden>
                        ☝️
                      </span>
                    </div>
                  )
                return data.businessSearch.nodes.map(node => {
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
  latitude: parseFloat(query.latitude || DEFAULT_LATITUDE),
  longitude: parseFloat(query.longitude || DEFAULT_LONGITUDE)
})

Discover.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
}

export default Discover
