import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import moment from 'moment'
import { Image } from 'cloudinary-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons'
import ReactMarkdown from 'react-markdown'

import config from '../config'
import { capitalizeFirstLetter } from '../helpers/textHelpers'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import DateDisplay from '../components/DateDisplay'
import Button from '../components/Button'
import { MapWithMarker } from '../components/Map'

const GET_EVENT = gql`
  query getEvent($slug: String!) {
    event(slug: $slug) {
      host {
        name
        logoId
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
    }
  }
`

function EventPage({ slug }) {
  return (
    <Layout>
      <Query
        query={GET_EVENT}
        variables={{
          slug
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          const {
            event: {
              beginsAt,
              name,
              url,
              description,
              host: {
                name: hostName,
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
            <Fragment>
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
                              {capitalizeFirstLetter(
                                moment(beginsAt).format('LLLL')
                              )}
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
                  <Row>
                    <Col xs="full" sm="2/3">
                      <Image
                        cloudName={config.cloudinaryCloudName}
                        // TODO: Implement the actual Event image
                        publicId="Govinu/hero_images/6c2543d032ac10028fc849e2b97cb1f7"
                        height={300}
                        width={800}
                        crop="fill"
                        className="rounded"
                        secure="true"
                      />
                      <div className="py-4 leading-normal rich-text">
                        <ReactMarkdown source={description} />
                      </div>
                    </Col>
                    <Col xs="full" sm="1/3">
                      <h2 className="mb-2 text-red-darker">Information</h2>
                      <div className="rounded shadow bg-white border border-grey-light">
                        <div className="p-4">
                          <div className="flex items-center py-2">
                            <FontAwesomeIcon
                              icon={faCalendarAlt}
                              className="text-grey-darkest"
                            />
                            <div className="flex-grow ml-2">
                              {capitalizeFirstLetter(
                                moment(beginsAt).format('LLLL')
                              )}
                            </div>
                          </div>

                          <div className="flex items-center py-2">
                            <FontAwesomeIcon
                              icon={faMapMarkerAlt}
                              className="text-grey-darkest"
                            />
                            <div className="flex-grow ml-2">
                              <div className="font-bold">{hostName}</div>
                              <div className="text-sm text-grey-darkest">{`${streetName} ${streetNumber}, ${postalCode} ${city}`}</div>
                            </div>
                          </div>
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
            </Fragment>
          )
        }}
      </Query>
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
