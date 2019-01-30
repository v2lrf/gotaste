import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Routes from '../services/Routes'
import { getParameterByName } from '../helpers'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { Spacer } from '../components/Spacer'
import { BusinessCard } from '../components/BusinessCard'
import { Row, Col } from '../components/Grid'

const DEFAULT_LATITUDE = '55.6753'
const DEFAUKT_LONGITUDE = '12.5703'

const SEARCH_FOR_BUSINESSES = gql`
  query searchForBusinesses($latitude: Float!, $longitude: Float!) {
    search(latitude: $latitude, longitude: $longitude, distance: 2000) {
      nodes {
        id
        name
        streetName
        streetNumber
        postalCode
        city
        slug
      }
    }
  }
`

function DiscoverPage() {
  const latitude = parseFloat(
    getParameterByName('latitude') || DEFAULT_LATITUDE
  )
  const longitude = parseFloat(
    getParameterByName('longitude') || DEFAUKT_LONGITUDE
  )
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Spacer top="12" bottom="12">
          <Row>
            <Query
              query={SEARCH_FOR_BUSINESSES}
              variables={{ latitude, longitude }}
            >
              {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`
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
                return data.search.nodes.map(node => {
                  const { id, slug } = node
                  return (
                    <Col xs="full" sm="1/2" lg="1/3" key={id}>
                      <BusinessCard
                        href={Routes.business_path(slug)}
                        {...node}
                      />
                    </Col>
                  )
                })
              }}
            </Query>
          </Row>
        </Spacer>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default DiscoverPage
