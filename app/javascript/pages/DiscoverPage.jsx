import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Routes from '../services/Routes'
import { getParameterByName } from '../helpers'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { Spacer } from '../components/Spacer'
import { SearchBar } from '../components/SearchBar'
import { BusinessCard } from '../components/BusinessCard'
import { Row, Col } from '../components/Grid'

const DEFAULT_LATITUDE = '55.6753'
const DEFAULT_LONGITUDE = '12.5703'

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
        logoId
      }
    }
  }
`

class DiscoverPage extends Component {
  constructor(props) {
    super(props)
    this.businessSearchRefetch = null
    this.state = {
      latitude: parseFloat(getParameterByName('latitude') || DEFAULT_LATITUDE),
      longitude: parseFloat(
        getParameterByName('longitude') || DEFAULT_LONGITUDE
      )
    }
  }

  handleBusinessSearchRefetch(event) {
    const {
      suggestion: { latlng }
    } = event
    this.setState(
      {
        latitude: latlng.lat,
        longitude: latlng.lng
      },
      () => {
        this.businessSearchRefetch()
      }
    )
  }

  render() {
    const { latitude, longitude } = this.state
    return (
      <Fragment>
        <NavBar />
        <div className="bg-grey-lighter shadow">
          <Container>
            <Spacer top="12" bottom="12" inner>
              <Row>
                <Col xs="full" md="1/2" offset>
                  <h3 className="text-center mb-4">
                    Hvor vil du gå på opdagelse henne?
                  </h3>
                  <SearchBar
                    onChange={event => this.handleBusinessSearchRefetch(event)}
                  />
                </Col>
              </Row>
            </Spacer>
          </Container>
        </div>
        <Container>
          <Spacer top="10" bottom="12">
            <h2 className="text-center mb-6 text-red-dark">Forhandlere</h2>
            <Row>
              <Query
                query={SEARCH_FOR_BUSINESSES}
                variables={{ latitude, longitude }}
              >
                {({ loading, error, data, refetch }) => {
                  this.businessSearchRefetch = refetch
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
}

export default DiscoverPage
