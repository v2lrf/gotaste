import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container } from '../components/Container'
import { NavBar } from '../components/NavBar'

const EventPage = ({ event }) => (
  <Fragment>
    <NavBar />
    <Container>
      <h1>{event.title}</h1>
    </Container>
  </Fragment>
)

EventPage.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    beginsAt: PropTypes.string.isRequired
  }).isRequired
}

export default EventPage
