import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import moment from 'moment'
import { Image } from 'cloudinary-react'
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUsdCircle,
  faHomeLgAlt
} from '@fortawesome/pro-light-svg-icons'
import ReactMarkdown from 'react-markdown'

import config from '../config'
import { capitalizeFirstLetter } from '../helpers/textHelpers'
import { simpleFormat } from '../helpers/currencyHelpers'

import EventPageLoader from '../loaders/event'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import DateDisplay from '../components/DateDisplay'
import Button from '../components/Button'
import { MapWithMarker } from '../components/Map'
import SimpleItem from '../components/SimpleItem'

const GET_EVENT = gql`
  query getEvent($slug: String!) {
    event(slug: $slug) {
      host {
        name
        logoId
        heroImageId
        slug
        address {
          streetName
          streetNumber
          postalCode
          city
          latitude
          longitude
        }
      }
      name
      beginsAt
      endsAt
      description
      url
      price
      eventHeroImageId: heroImageId
    }
  }
`

function EventPage({ slug }) {
  const { data, loading } = useQuery(GET_EVENT, {
    variables: {
      slug
    }
  })

  if (loading) return <EventPageLoader />
  const {
    event: {
      beginsAt,
      name,
      url,
      description,
      price,
      eventHeroImageId,
      host: {
        name: hostName,
        heroImageId: hostHeroImageId,
        slug: hostSlug,
        address: {
          streetName,
          streetNumber,
          postalCode,
          city,
          latitude,
          longitude
        }
      }
    }
  } = data

  return (
    <Layout title={name} metaDescription={description}>
      <div className="bg-grey-lighter shadow">
        <Container>
          <Spacer top="12" bottom="12" inner>
            <Row>
              <Col xs="full" sm="2/3" lg="3/4">
                <div className="flex items-center mb-6 sm:mb-0">
                  <DateDisplay timestamp={beginsAt} />
                  <div className="ml-4 flex-grow">
                    <time
                      dateTime={beginsAt}
                      className="text-grey-darkest text-sm"
                    >
                      {capitalizeFirstLetter(moment(beginsAt).format('LLLL'))}
                    </time>
                    <h1 className="text-red-darker text-xl sm:text-2xl">
                      {name}
                    </h1>
                  </div>
                </div>
              </Col>
              <Col xs="full" sm="1/3" lg="1/4">
                <h3 className="text-red-darkest mr-4 mb-2 text-base sm:text-lg">
                  Ønsker du at deltage?
                </h3>
                <Button type="button" kind="primary" fullWidth>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-red-darkest"
                  >
                    Køb billet
                  </a>
                </Button>
              </Col>
            </Row>
          </Spacer>
        </Container>
      </div>
      <Container>
        <Spacer top="12" bottom="12" inner>
          <Row className="flex-col-reverse sm:flex-row">
            <Col xs="full" sm="2/3">
              <Image
                cloudName={config.cloudinaryCloudName}
                publicId={eventHeroImageId || hostHeroImageId}
                height={300}
                width={800}
                crop="fill"
                className="rounded"
                secure="true"
                alt={name}
              />
              <div className="py-4 leading-normal rich-text">
                <ReactMarkdown source={description} />
              </div>
            </Col>
            <Col xs="full" sm="1/3">
              <h2 className="mb-2 text-red-darker">Information</h2>
              <div className="rounded shadow bg-white border border-grey-light mb-8 sm:mb-0">
                <div className="p-4">
                  <SimpleItem icon={faCalendarAlt}>
                    {capitalizeFirstLetter(moment(beginsAt).format('LLLL'))}
                  </SimpleItem>
                  <SimpleItem icon={faUsdCircle}>
                    {simpleFormat(price)}
                  </SimpleItem>
                  <SimpleItem icon={faMapMarkerAlt}>
                    <div className="font-bold">{hostName}</div>
                    <div className="text-sm text-grey-darkest">{`${streetName} ${streetNumber}, ${postalCode} ${city}`}</div>
                  </SimpleItem>
                  <SimpleItem icon={faHomeLgAlt}>
                    <Link
                      href={{
                        pathname: '/business',
                        query: { slug: hostSlug }
                      }}
                      as={`/business/${hostSlug}`}
                    >
                      <a className="text-red-dark no-underline hover:underline focus:underline">
                        {`Gå til ${hostName}`}
                      </a>
                    </Link>
                  </SimpleItem>
                </div>
                <MapWithMarker
                  latitude={latitude}
                  longitude={longitude}
                  height={200}
                  width="100%"
                  className="rounded-b"
                />
              </div>
            </Col>
          </Row>
        </Spacer>
      </Container>
    </Layout>
  )
}

EventPage.getInitialProps = ({ query }) => ({
  slug: query.slug
})

EventPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default EventPage
