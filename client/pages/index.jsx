import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import ContentLoader from 'react-content-loader'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'

const SearchBar = dynamic({
  loader: () => import('../components/SearchBar'),
  loading: () => (
    <ContentLoader
      height={50}
      width={464}
      speed={1}
      primaryColor="#FFFFFF"
      secondaryColor="#DAE1E7"
    >
      <rect rx="4" ry="4" width="464" height="50" />
    </ContentLoader>
  ),
  ssr: false
})

const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&h=600&q=80'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { latitude: 0, longitude: 0 }
  }

  handleSearchSubmit(event) {
    const {
      suggestion: { latlng }
    } = event
    this.setState(
      {
        latitude: latlng.lat,
        longitude: latlng.lng
      },
      () => {
        // ... TODO..
      }
    )
  }

  render() {
    return (
      <Layout>
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${HERO_IMAGE_URL})`
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
                  <SearchBar
                    onChange={event => this.handleSearchSubmit(event)}
                  />
                </Col>
              </Row>
            </Spacer>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default Home
