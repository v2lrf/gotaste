import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Image } from 'cloudinary-react'

import BusinessInfoFields from '../fragments/BusinessInfoFields'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Spacer from '../components/Spacer'
import { Row, Col } from '../components/Grid'
import InfoItem from '../components/InfoItem'
import { MapWithMarker } from '../components/Map'

const GET_BUSINESS = gql`
  query getBusiness($slug: String!) {
    business(slug: $slug) {
      ...BusinessInfoFields
      latitude
      longitude
    }
  }

  ${BusinessInfoFields}
`

function BusinessPage({ slug }) {
  return (
    <Layout>
      <Query
        query={GET_BUSINESS}
        variables={{
          slug
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          const {
            business: {
              logoId,
              name,
              streetName,
              streetNumber,
              postalCode,
              city,
              heroImageId,
              latitude,
              longitude
            }
          } = data
          return (
            <Fragment>
              <div className="bg-grey-lighter shadow">
                <Container>
                  <Spacer top="12" bottom="12" inner>
                    <InfoItem
                      imageSrc={logoId}
                      headline={name}
                      tagline={`${streetName} ${streetNumber}, ${postalCode} ${city}`}
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
                        cloudName="dkrjpli3y"
                        publicId={heroImageId}
                        height={300}
                        width={800}
                        crop="fill"
                        className="rounded"
                        secure="true"
                      />
                    </Col>
                    <Col xs="full" sm="1/3">
                      <MapWithMarker
                        latitude={latitude}
                        longitude={longitude}
                        height={200}
                        width="100%"
                      />
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

BusinessPage.getInitialProps = ({ query }) => ({
  slug: query.slug
})

BusinessPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default BusinessPage