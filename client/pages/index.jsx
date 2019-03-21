import React from 'react'
import Router from 'next/router'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import BusinessInfoFields from '../fragments/BusinessInfoFields'

import config from '../config'

import IndexPageLoader from '../loaders/index'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
/* eslint-disable-next-line */
import SearchBar from '../components/SearchBar'
import AreaRow from '../components/AreaRow'

const SEARCH_FOR_AREAS = gql`
  query searchForAreas($latitude: Float!, $longitude: Float!, $distance: Int!) {
    areaSearch(
      latitude: $latitude
      longitude: $longitude
      distance: $distance
    ) {
      nodes {
        name
        slug
        businesses(last: 3) {
          nodes {
            ...BusinessInfoFields
          }
        }
      }
    }
  }

  ${BusinessInfoFields}
`

function handleSearchSubmit(latLng) {
  Router.push({
    pathname: '/discover',
    query: latLng
  })
}

function Home() {
  return (
    <Layout>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${
            config.HERO_IMAGE_URL
          })`
        }}
      >
        <Container>
          <Spacer top="20" bottom="32" inner>
            <h2 className="text-3xl text-white text-center mb-1">
              Find den bedste vin
            </h2>
            <p className="text-white text-center mb-4">
              Indtast en adresse nedenfor, så finder vi smagninger og
              arrangementer tæt på dig
            </p>
            <Row>
              <Col offset sm="1/2">
                <SearchBar onChange={latLng => handleSearchSubmit(latLng)} />
              </Col>
            </Row>
          </Spacer>
        </Container>
      </div>
      <Container>
        <Spacer top="10" bottom="12">
          <h2 className="text-center mb-6 text-red-dark">
            Udvalgte forhandlere og barer
          </h2>
          <Query
            query={SEARCH_FOR_AREAS}
            variables={{
              latitude: config.DEFAULT_LATITUDE,
              longitude: config.DEFAULT_LONGITUDE,
              distance: config.DEFAULT_DISTANCE
            }}
          >
            {({ loading, data }) => {
              if (loading) return <IndexPageLoader />

              return data.areaSearch.nodes.map(node => (
                <AreaRow
                  key={node.slug}
                  name={node.name}
                  businesses={node.businesses.nodes}
                />
              ))
            }}
          </Query>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default Home
