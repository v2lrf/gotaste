import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from 'react-apollo-hooks'

import checkLoggedIn, {
  checkOwnerLogin,
  getOwnerSlug,
  checkAdminLogin,
  getAdminBusinessSlug
} from '../../lib/checkLoggedIn'
import redirect from '../../lib/redirect'

import CellarLayout from '../../components/Layout/CellarLayout'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import { Row, Col } from '../../components/Grid'
import Card from '../../components/Card'

// eslint-disable-next-line import/named
import { OpeningHourInput } from '../../components/Form'

import Button from '../../components/Button'
import Alert from '../../components/Alert'

const GET_BUSINESS_OPENING_HOURS = gql`
  query getBusinessOpeningHours($slug: String!) {
    business(slug: $slug) {
      openingHours {
        id
        dayOfWeek
        open
        close
      }
    }
  }
`

const UPDATE_OPENING_HOURS = gql`
  mutation updateOpeningHours(
    $slug: String!
    $openingHours: [OpeningHourInput!]!
  ) {
    updateOpeningHours(
      input: { businessSlug: $slug, openingHours: $openingHours }
    ) {
      openingHours {
        id
        dayOfWeek
        open
        close
      }
    }
  }
`

function OpeningHoursPage({ slug }) {
  const { data, loading, refetch } = useQuery(GET_BUSINESS_OPENING_HOURS, {
    variables: {
      slug
    }
  })

  const [openingHoursState, setOpeningHoursState] = useState([])

  useEffect(() => {
    if (!loading) {
      const {
        business: { openingHours }
      } = data
      setOpeningHoursState(openingHours)
    }
  }, [data])

  const [updateOpeningHoursAlert, setupdateOpeningHoursAlert] = useState('')

  const updateOpeningHours = useMutation(UPDATE_OPENING_HOURS, {
    update: () => {
      setupdateOpeningHoursAlert('Åbningtider opdateret!')
      refetch()
    },
    variables: {
      slug,
      openingHours: openingHoursState.map(
        ({ dayOfWeek, __typename, ...keepAttrs }) => keepAttrs
      )
    }
  })

  const handleOpeningHourChange = (selectedOpeningHourId, open, close) => {
    const objIndex = openingHoursState.findIndex(
      obj => obj.id === selectedOpeningHourId
    )

    const updatedObj = {
      ...openingHoursState[objIndex],
      open,
      close
    }

    const updatedOpeningHours = [
      ...openingHoursState.slice(0, objIndex),
      updatedObj,
      ...openingHoursState.slice(objIndex + 1)
    ]

    setOpeningHoursState(updatedOpeningHours)
  }

  if (loading) return 'loading..'

  return (
    <CellarLayout title="Åbningstider – GoTaste Cellar">
      {updateOpeningHoursAlert && (
        <Alert fixed kind="info">
          {updateOpeningHoursAlert}
        </Alert>
      )}
      <Container>
        <Spacer top="12" bottom="20">
          <Card title="Opdater åbningstider">
            <form
              onSubmit={e => {
                e.preventDefault()
                e.stopPropagation()
                updateOpeningHours()
              }}
            >
              <Row className="border-b mb-6 pb-4">
                <Col xs="full" md="1/3">
                  <span className="text-grey-darker">
                    Din forretnings åbningstider.
                  </span>
                </Col>
                <Col xs="full" md="2/3">
                  {openingHoursState.map(openingHour => (
                    <OpeningHourInput
                      openingHour={openingHour}
                      key={openingHour.id}
                      onOpeningHourChange={handleOpeningHourChange}
                    />
                  ))}
                </Col>
              </Row>
              <div className="text-right">
                <Button kind="primary">Gem ændringer</Button>
              </div>
            </form>
          </Card>
        </Spacer>
      </Container>
    </CellarLayout>
  )
}

OpeningHoursPage.getInitialProps = async context => {
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

OpeningHoursPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default withApollo(OpeningHoursPage)
