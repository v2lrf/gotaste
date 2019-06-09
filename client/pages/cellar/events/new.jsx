import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from 'react-apollo-hooks'

import checkLoggedIn, {
  checkOwnerLogin,
  getOwnerSlug,
  checkAdminLogin,
  getAdminBusinessSlug
} from '../../../lib/checkLoggedIn'
import redirect from '../../../lib/redirect'

import useForm from '../../../hooks/useForm'

import CellarLayout from '../../../components/Layout/CellarLayout'
import Container from '../../../components/Container'
import Spacer from '../../../components/Spacer'
import Card from '../../../components/Card'
import { Row, Col } from '../../../components/Grid'
// eslint-disable-next-line import/named
import { Input, DateTimeInput, Checkbox } from '../../../components/Form'
// eslint-disable-next-line
import Editor from '../../../components/Editor'
import Button from '../../../components/Button'

const GET_BUSINESS = gql`
  query getBusiness($slug: String!) {
    business(slug: $slug) {
      name
      address {
        streetName
        streetNumber
        postalCode
        city
      }
    }
  }
`

const CREATE_EVENT = gql`
  mutation createEvent(
    $slug: String!
    $name: String!
    $beginsAt: ISO8601DateTime!
    $endsAt: ISO8601DateTime!
    $description: String
    $url: String
    $price: Float
    $streetName: String!
    $streetNumber: String!
    $postalCode: String!
    $city: String!
  ) {
    createEvent(
      input: {
        businessSlug: $slug
        attributes: {
          name: $name
          beginsAt: $beginsAt
          endsAt: $endsAt
          url: $url
          price: $price
          description: $description
        }
        address: {
          streetName: $streetName
          streetNumber: $streetNumber
          postalCode: $postalCode
          city: $city
        }
      }
    ) {
      event {
        slug
      }
    }
  }
`

function CellarNewEventsPage({ slug }) {
  const { data, loading } = useQuery(GET_BUSINESS, {
    variables: {
      slug
    }
  })
  const { values, handleChange } = useForm({
    name: '',
    url: '',
    price: '',
    streetName: '',
    streetNumber: '',
    postalCode: '',
    city: ''
  })
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [useBusinessAddress, setUseBusinessAddress] = useState(true)
  const [description, setDescription] = useState('')

  function getEventAddress() {
    let addressObject = values
    if (useBusinessAddress && !loading) {
      const {
        business: { address }
      } = data
      addressObject = address
    }
    const { streetName, streetNumber, postalCode, city } = addressObject
    return {
      streetName,
      streetNumber,
      postalCode,
      city
    }
  }

  const createEvent = useMutation(CREATE_EVENT, {
    update: () => {
      // For now let's redirect to the events overview
      redirect({}, '/cellar/events')
    },
    variables: {
      slug,
      name: values.name,
      beginsAt: startTime,
      endsAt: endTime,
      url: values.url,
      price: parseFloat(values.price),
      description,
      ...getEventAddress()
    }
  })

  if (loading) return 'loading..'

  return (
    <CellarLayout title="GoTaste Cellar - Ny begivenhed">
      <Container>
        <Spacer top="12" bottom="20">
          <Card title="Opret ny begivenhed">
            <form
              onSubmit={e => {
                e.preventDefault()
                e.stopPropagation()
                createEvent()
              }}
            >
              <Row className="border-b mb-6 pb-4">
                <Col xs="full" md="1/3">
                  <span className="text-grey-darker">Detaljer</span>
                </Col>
                <Col xs="full" md="2/3">
                  <Input
                    label="Begivenhedens navn"
                    placeholder="Eks. 'Verdenen rundt i Pinot Noir'"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <DateTimeInput
                    label="Starttidspunkt"
                    value={startTime}
                    onChange={dateTime => {
                      setStartTime(dateTime)
                      setEndTime(dateTime)
                    }}
                    noPastDates
                  />
                  <DateTimeInput
                    label="Sluttidspunkt"
                    value={endTime}
                    onChange={dateTime => setEndTime(dateTime)}
                    noPastDates
                    notBeforeDate={startTime}
                  />
                </Col>
              </Row>
              <Row className="border-b mb-6 pb-4">
                <Col xs="full" md="1/3">
                  <span className="text-grey-darker">Biletter</span>
                </Col>
                <Col xs="full" md="2/3">
                  <Input
                    label="URL til billetter"
                    placeholder="Eks. https://billethaj.dk/koeb/billet"
                    name="url"
                    type="url"
                    value={values.url}
                    onChange={handleChange}
                  />
                  <Input
                    label="Pris per billet"
                    placeholder="Eks. 150"
                    name="price"
                    type="text"
                    value={values.price}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="border-b mb-6 pb-6">
                <Col xs="full" md="1/3">
                  <span className="text-grey-darker">Addresse</span>
                </Col>
                <Col xs="full" md="2/3">
                  <Checkbox
                    name="useBusinessAddress"
                    label={`Brug samme adresse som ${data.business.name}`}
                    checked={useBusinessAddress}
                    onChange={() => setUseBusinessAddress(!useBusinessAddress)}
                  />
                  {!useBusinessAddress && (
                    <Spacer top="6">
                      <Input
                        label="Gadenavn"
                        placeholder="Eks. Paradisæblevej"
                        name="streetName"
                        type="text"
                        value={values.streetName}
                        onChange={handleChange}
                      />
                      <Input
                        label="Gadenummer"
                        placeholder="Eks. 12 B"
                        name="streetNumber"
                        type="text"
                        value={values.streetNumber}
                        onChange={handleChange}
                      />
                      <Input
                        label="Postnummer"
                        placeholder="Eks. 2100"
                        name="postalCode"
                        type="tel"
                        value={values.postalCode}
                        onChange={handleChange}
                      />
                      <Input
                        label="By"
                        placeholder="Eks. København Ø"
                        name="city"
                        type="text"
                        value={values.city}
                        onChange={handleChange}
                      />
                    </Spacer>
                  )}
                </Col>
              </Row>
              <Row className="border-b mb-6 pb-4">
                <Col xs="full" md="1/3">
                  <span className="text-grey-darker">Beskrivelse</span>
                </Col>
                <Col xs="full" md="2/3">
                  <Editor onChange={value => setDescription(value)} />
                </Col>
              </Row>
              <div className="text-right">
                <Button kind="primary">Opret begivenhed</Button>
              </div>
            </form>
          </Card>
        </Spacer>
      </Container>
    </CellarLayout>
  )
}

CellarNewEventsPage.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)
  if (!checkOwnerLogin(loggedInUser)) {
    redirect(context, '/')
  }

  let slug = getOwnerSlug(loggedInUser)

  if (checkAdminLogin(loggedInUser)) {
    const adminSlug = getAdminBusinessSlug(context)
    slug = adminSlug || slug
  }

  return {
    slug
  }
}

CellarNewEventsPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default withApollo(CellarNewEventsPage)
