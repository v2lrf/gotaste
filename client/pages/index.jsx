import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Image } from 'cloudinary-react'

import config from '../config'

import EventInfoFields from '../fragments/EventInfoFields'
import BusinessInfoFields from '../fragments/BusinessInfoFields'

import IndexPageLoader from '../loaders/index'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
/* eslint-disable-next-line */
import SearchBar from '../components/SearchBar'
import EventCard from '../components/EventCard'
import BusinessCard from '../components/BusinessCard'
import Button from '../components/Button'

const GET_UPCOMING_EVENTS = gql`
  query getUpcomingEvents {
    events(whenEventBegins: UPCOMING, orderBy: BEGINS_AT_ASC, first: 3) {
      nodes {
        ...EventInfoFields
      }
    }
  }

  ${EventInfoFields}
`

const GET_SELECTED_BUSINESESS = gql`
  query getSelectedBusinesses {
    businesses(orderBy: NAME_ASC, first: 3) {
      nodes {
        ...BusinessInfoFields
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
        className="bg-cover bg-no-repeat bg-center py-24 sm:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${
            config.HERO_IMAGE_URL
          })`
        }}
      >
        <Container>
          <Spacer top="16" bottom="24" inner>
            <h1 className="text-3xl sm:text-5xl text-white text-center mb-4">
              Smag og gå på opdagelse i vinens verden
            </h1>
            <p className="text-white text-center text-lg mb-4 ">
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
          <h2 className="text-red-dark mb-4 ml-2">Kommende begivenheder</h2>
          <Row>
            <Query query={GET_UPCOMING_EVENTS}>
              {({ loading, data: { events } }) => {
                if (loading) return <IndexPageLoader />
                return events.nodes.map(event => (
                  <Col xs="full" sm="1/2" lg="1/3" key={event.slug}>
                    <EventCard {...event} />
                  </Col>
                ))
              }}
            </Query>
          </Row>
          <h2 className="text-red-dark my-4 ml-2">Udvalgte forhandlere</h2>
          <Row>
            <Query query={GET_SELECTED_BUSINESESS}>
              {({ loading, data: { businesses } }) => {
                if (loading) return <IndexPageLoader />
                return businesses.nodes.map(business => (
                  <Col xs="full" sm="1/2" lg="1/3" key={business.slug}>
                    <BusinessCard {...business} />
                  </Col>
                ))
              }}
            </Query>
          </Row>

          <div className="flex-col-reverse md:flex-row my-24 flex mx-0 md:mx-20 lg:mx-32 mx-auto shadow-lg rounded">
            <div className="flex-1 self-center p-4 md:p-8">
              <h3 className="text-red-darker text-2xl">GoTaste?</h3>
              <h2 className="my-4 text-red text-3xl lg:text-5xl">
                God vin, nu = GoTaste
              </h2>
              <p className="leading-normal">
                Find og følg din lokale forhandler eller bar. Eller gå på
                opdagelse og find nye smagninger eller arrangementer.
              </p>
            </div>
            <div className="flex-1">
              <Image
                cloudName={config.cloudinaryCloudName}
                publicId="/GoTaste/hero_images/b35c0641c0f571d3e6fca4a0fd3ebcaa"
                height={500}
                width={460}
                crop="fill"
                className="h-full rounded-t md:rounded-t-none md:rounded-r"
                secure="true"
              />
            </div>
          </div>
        </Spacer>
      </Container>
      <div className="bg-grey-lightest py-16 text-center">
        <Container narrow>
          <h2 className="text-red mb-4">Vinsmagninger er for alle</h2>
          <p className="leading-normal">
            Du behøver ikke være feinschmecker, ønolog eller sommelier for at gå
            til vinsmagning. Vinsmagninger er for alle og er nemt at finde med
            GoTaste.
          </p>
        </Container>
      </div>
      <Container narrow>
        <Spacer vertical="20">
          <div className="flex flex-col md:flex-row rounded shadow-lg">
            <div className="flex-1">
              <Image
                cloudName={config.cloudinaryCloudName}
                publicId="/GoTaste/hero_images/e5b634a75f0f6e4266f5aacf255a221b"
                height={500}
                width={460}
                crop="fill"
                className="h-full rounded-t md:rounded-t-none md:rounded-l"
                secure="true"
              />
            </div>
            <div className="flex-1 text-center self-center px-4 py-8 md:p-8">
              <h2 className="text-red mb-4">Bliv en del af GoTaste</h2>
              <p className="leading-normal mb-4">
                Som medlem af GoTaste får du adgang til en masse funktioner på
                hjemmesiden samt (snart) adgang til en masse fordele.
              </p>
              <Link href="/sign-up">
                <Button type="button" kind="primary">
                  Opret en bruger
                </Button>
              </Link>
            </div>
          </div>
        </Spacer>
      </Container>
    </Layout>
  )
}

export default Home
