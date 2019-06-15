import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { Image } from 'cloudinary-react'
import ReactMarkdown from 'react-markdown'
import {
  faMapMarkerAlt,
  faPhone,
  faBrowser,
  faDoorOpen
} from '@fortawesome/pro-light-svg-icons'

import config from '../config'
import ahoy from '../lib/ahoy'
import {
  displayPhoneNumber,
  displayURL,
  formatOpeningHours,
  translateWeekDay
} from '../helpers/textHelpers'
import businessStructuredData from '../helpers/businessStructuredData'

import BusinessInfoFields from '../fragments/BusinessInfoFields'
import EventInfoFields from '../fragments/EventInfoFields'

import BusinessPageLoader from '../loaders/business'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { Row, Col } from '../components/Grid'
import SimpleItem from '../components/SimpleItem'
import EventCard from '../components/EventCard'
import { MapWithMarker } from '../components/Map'
import Button from '../components/Button'

const GET_BUSINESS = gql`
  query getBusiness($slug: String!) {
    business(slug: $slug) {
      ...BusinessInfoFields
      description
      shortDescription
      phoneNumber
      website
      address {
        latitude
        longitude
      }
      area {
        name
      }
      isOpenNow
      openingHours {
        dayOfWeek
        open
        close
      }
      events(whenEventBegins: UPCOMING, first: 2) {
        nodes {
          ...EventInfoFields
        }
      }
    }
  }

  ${BusinessInfoFields}
  ${EventInfoFields}
`

function BusinessPage({ slug }) {
  const { data, loading } = useQuery(GET_BUSINESS, {
    variables: {
      slug
    }
  })

  useEffect(() => {
    ahoy.track('business_page_view', { slug })
  }, [])

  if (loading) return <BusinessPageLoader />
  const {
    business,
    business: {
      logoId,
      name,
      address,
      heroImageId,
      description,
      shortDescription,
      phoneNumber,
      website,
      area: { name: areaName },
      events: { nodes: eventNodes },
      openingHours,
      isOpenNow
    }
  } = data

  return (
    <Layout
      title={name}
      metaDescription={shortDescription}
      metaKeywords={[
        'vin',
        'vinbar',
        'vinforhandler',
        areaName,
        name,
        address.city
      ]}
    >
      <Image
        cloudName={config.cloudinaryCloudName}
        publicId={heroImageId}
        height={500}
        width={1200}
        crop="fill"
        className="block container mx-auto rounded-none lg:rounded shadow-lg"
        secure="true"
        alt={name}
      />
      <Container>
        <div className="flex items-center py-2 mt-4">
          <figure className="mr-2 w-16 h-16">
            <Image
              cloudName={config.cloudinaryCloudName}
              publicId={logoId}
              width="200"
              height="200"
              crop="scale"
              className="rounded-full"
              alt={`${name} logo`}
              secure="true"
            />
          </figure>
          <div className="flex-grow ml-2">
            <h1 className="text-2xl sm:text-4xl text-red-dark">{name}</h1>
          </div>
        </div>
        <SimpleItem icon={faMapMarkerAlt}>
          {`${address.streetName} ${address.streetNumber}, ${
            address.postalCode
          } ${address.city}`}
        </SimpleItem>

        {isOpenNow && <SimpleItem icon={faDoorOpen}>Åben nu</SimpleItem>}

        <div className="py-4 sm:py-8 leading-loose rich-text">
          <ReactMarkdown source={description} />
        </div>

        {eventNodes.length > 0 && (
          <Fragment>
            <h2 className="mb-2 sm:mb-4 text-red-dark">
              Kommende begivenheder
            </h2>
            <Row>
              {eventNodes.slice(0, 2).map(event => (
                <Col xs="full" sm="1/2" key={event.slug}>
                  <EventCard {...event} />
                </Col>
              ))}
            </Row>
          </Fragment>
        )}
        <h2 className="mt-8 mb-2 text-red-dark">Åbningstider</h2>
        {openingHours.map(openingHoursForDay => (
          <Row key={openingHoursForDay.dayOfWeek} className="-mx-4 mb-2">
            <Col xs="1/2" sm="1/6">
              {translateWeekDay(openingHoursForDay.dayOfWeek)}
            </Col>
            <Col xs="1/2" sm="1/6">
              <div className="text-right">
                {formatOpeningHours(
                  openingHoursForDay.open,
                  openingHoursForDay.close
                )}
              </div>
            </Col>
          </Row>
        ))}
        <h2 className="mt-8 mb-2 text-red-dark">Lokation</h2>
        <div className="flex justify-between mb-4 text-sm sm:text-base">
          <span>
            {`${address.streetName} ${address.streetNumber}, ${
              address.postalCode
            } ${address.city}`}
          </span>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${
              address.latitude
            },${address.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 no-underline text-red-darker hover:underline"
          >
            Rutevejledning
          </a>
        </div>
        <MapWithMarker
          latitude={address.latitude}
          longitude={address.longitude}
          height={400}
          width="100%"
          className="rounded shadow-lg"
        />

        <h2 className="mt-8 mb-2 text-red-dark">Mere Information</h2>
        <div className="mb-8">
          {phoneNumber && (
            <SimpleItem icon={faPhone}>
              <a
                href={`tel:${phoneNumber}`}
                className="no-underline text-red-darker hover:underline"
              >
                {displayPhoneNumber(phoneNumber)}
              </a>
            </SimpleItem>
          )}
          {website && (
            <SimpleItem icon={faBrowser}>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-red-darker hover:underline"
              >
                {displayURL(website)}
              </a>
            </SimpleItem>
          )}
        </div>

        <h3 className="mt-8 mb-2 text-red-darker text-center">{`Arbejder du for ${name}?`}</h3>
        <div className="mb-8 text-center">
          <p className="mb-2">
            Få adgang til profilen, administrer begivenheder, information og en
            masse andre ting
          </p>
          <a href="#" className="no-underline text-red-darker hover:underline">
            <Button type="button" kind="secondary">
              {`Få adgang til ${name}`}
            </Button>
          </a>
        </div>
      </Container>
      <script type="application/ld+json">
        {businessStructuredData(business)}
      </script>
    </Layout>
  )
}

BusinessPage.getInitialProps = ({ query }) => ({
  slug: query.slug
})

BusinessPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default BusinessPage
