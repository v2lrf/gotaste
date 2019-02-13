import React from 'react'
import Router from 'next/router'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
/* eslint-disable-next-line */
import SearchBar from '../components/SearchBar'

const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&h=600&q=80'

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
                <SearchBar onChange={latLng => handleSearchSubmit(latLng)} />
              </Col>
            </Row>
          </Spacer>
        </Container>
      </div>
    </Layout>
  )
}

export default Home
