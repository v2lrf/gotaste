import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import { Image } from 'cloudinary-react'
import ReactMarkdown from 'react-markdown'

import config from '../config'

import BusinessInfoFields from '../fragments/BusinessInfoFields'
import EventInfoFields from '../fragments/EventInfoFields'

import BusinessPageLoader from '../loaders/business'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import InfoItem from '../components/InfoItem'
import EventCard from '../components/EventCard'
import { MapWithMarker } from '../components/Map'

const GET_BUSINESS = gql`
  query getBusiness($slug: String!) {
    business(slug: $slug) {
      ...BusinessInfoFields
      description
      address {
        latitude
        longitude
      }
      events(whenEventBegins: UPCOMING, first: 1) {
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

  if (loading) return <BusinessPageLoader />
  const {
    business: {
      logoId,
      name,
      address,
      heroImageId,
      description,
      events: { nodes: eventNodes }
    }
  } = data
  return (
    <Layout title={name} metaDescription={description}>
      <Fragment>
        <div className="bg-grey-lighter shadow">
          <Container>
            <Spacer top="12" bottom="12" inner>
              <InfoItem
                imageSrc={logoId}
                headline={<h1 className="text-3xl text-red-dark">{name}</h1>}
                tagline={`${address.streetName} ${address.streetNumber}, ${
                  address.postalCode
                } ${address.city}`}
                large
              />
            </Spacer>
          </Container>
        </div>
        <Container>
          <Spacer top="12" bottom="12" inner>
            <Row>
              <Col xs="full" sm="2/3">
                <Image
                  cloudName={config.cloudinaryCloudName}
                  publicId={heroImageId}
                  height={500}
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
                {eventNodes.length > 0 && (
                  <Fragment>
                    <h3 className="mb-2 text-red-darker">
                      Kommende begivenhed
                    </h3>
                    <EventCard {...eventNodes[0]} />
                  </Fragment>
                )}

                <h3 className="mb-2 text-red-darker">Information</h3>
                <div className="rounded shadow bg-white">
                  <MapWithMarker
                    latitude={address.latitude}
                    longitude={address.longitude}
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
