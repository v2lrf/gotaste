import React, { Component, Fragment, createRef } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import { Container } from '../components/Container'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { SearchBar } from '../components/SearchBar'
import { Spacer } from '../components/Spacer'
import { AreaRow } from '../components/AreaRow'
import { Row, Col } from '../components/Grid'

import Routes from '../services/Routes'

const heroImageUrl =
  'https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&h=600&q=80'

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
        businesses {
          nodes {
            id
            name
            slug
            streetName
            streetNumber
            postalCode
            city
          }
        }
      }
    }
  }
`

export class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.form = createRef()
    this.state = { latitude: 0, longitude: 0 }
  }

  handleSubmit(event) {
    const {
      suggestion: { latlng }
    } = event
    this.setState(
      {
        latitude: latlng.lat,
        longitude: latlng.lng
      },
      () => {
        this.form.current.submit()
      }
    )
  }

  render() {
    const { latitude, longitude } = this.state

    return (
      <Fragment>
        <NavBar />
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${heroImageUrl})`
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
                  <form
                    action={Routes.discover_path()}
                    method="GET"
                    onSubmit={this.handleSubmit}
                    ref={this.form}
                  >
                    <input type="hidden" name="latitude" value={latitude} />
                    <input type="hidden" name="longitude" value={longitude} />
                    <SearchBar onChange={event => this.handleSubmit(event)} />
                  </form>
                </Col>
              </Row>
            </Spacer>
          </Container>
        </div>

        <Container>
          <Spacer top="10" bottom="12">
            <Query
              query={SEARCH_FOR_AREAS}
              variables={{
                latitude: 55.6753,
                longitude: 12.5703,
                distance: 6000
              }}
            >
              {({ loading, error, data }) => {
                if (loading) return ''
                if (error) return `Error! ${error.message}`

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
        <Footer />
      </Fragment>
    )
  }
}

export default SearchPage
