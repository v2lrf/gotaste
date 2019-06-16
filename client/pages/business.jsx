import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { Image } from 'cloudinary-react'
import ReactMarkdown from 'react-markdown'
import { faPhone, faBrowser, faHeart } from '@fortawesome/pro-light-svg-icons'

import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import config from '../config'
import ahoy from '../lib/ahoy'
import {
  displayPhoneNumber,
  displayURL,
  formatOpeningHours,
  translateWeekDay,
  translateBusinessType
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
import FavouriteButton from '../components/FavouriteButton'

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
      isOpenNow,
      businessType
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
      <div>
        <div className="">
          <Image
            cloudName={config.cloudinaryCloudName}
            publicId={heroImageId}
            crop="fill"
            secure="true"
            alt={name}
            width="1200"
            height="500"
            className="shadow-md w-full object-cover mh-200"
          />
        </div>

        <div className="relative px-4 -mt-16">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="flex">
              <span className="inline-block px-2 py-1 leading-none bg-red-lightest text-grey-darkest font-semibold rounded-lg">
                {translateBusinessType(businessType)}
              </span>

              <div className="px-2 py-1 text-grey-dark font-semibold">
                {isOpenNow && 'Åben nu'}
              </div>
            </div>
            <h1 className="my-3 font-semibold text-3xl text-red">{name}</h1>
            <h2 className="my-3 text-xl font-normal">{shortDescription}</h2>
            <div className="flex">
              <span className="inline-block border rounded p-2 hover:bg-grey-lightest">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-black text-2xl"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Container>
          <div className="sm:py-8 leading-loose">
            <Row>
              <Col xs="1/1" sm="4/5">
                <ReactMarkdown source={description} className="rich-text" />
              </Col>

              <Col xs="1/1" sm="1/5">
                <h2 className="mb-2 text-xl text-red">Information</h2>

                <div>
                  <h3 className="my-2 text-base">Adresse</h3>
                  <div className="my-2 text-sm">
                    <div>{`${address.streetName} ${address.streetNumber}`}</div>
                    <div className="text-grey-darker">
                      {`${address.postalCode} ${address.city}`}
                    </div>
                  </div>

                  <div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${
                        address.latitude
                      },${address.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm no-underline text-red hover:underline"
                    >
                      Find rutevejledning
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="my-2 text-base">Åbningstider</h3>
                  {openingHours.map(openingHoursForDay => (
                    <Row
                      key={openingHoursForDay.dayOfWeek}
                      className="-mx-4 mb-1"
                    >
                      <Col xs="1/3" sm="1/3">
                        <div className="text-sm">
                          {translateWeekDay(openingHoursForDay.dayOfWeek)}
                        </div>
                      </Col>
                      <Col xs="2/3" sm="2/3">
                        <div className="text-right text-sm text-grey-darker">
                          {formatOpeningHours(
                            openingHoursForDay.open,
                            openingHoursForDay.close
                          )}
                        </div>
                      </Col>
                    </Row>
                  ))}
                </div>
              </Col>
            </Row>
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

          <h2 className="mt-8 mb-2 text-red-dark">Lokation</h2>
          <div className="flex justify-between mb-4 text-sm sm:text-base">
            <span>
              {`${address.streetName} ${address.streetNumber}, ${
                address.postalCode
              } ${address.city}`}
            </span>
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
              Få adgang til profilen, administrer begivenheder, information og
              en masse andre ting
            </p>
            <a
              href="#"
              className="no-underline text-red-darker hover:underline"
            >
              <Button type="button" kind="secondary">
                {`Få adgang til ${name}`}
              </Button>
            </a>
          </div>
        </Container>
      </div>
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
