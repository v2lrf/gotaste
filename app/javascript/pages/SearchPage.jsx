import React, { Component, Fragment, createRef } from 'react'

import { Container } from '../components/Container'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { SearchBar } from '../components/SearchBar'
import { Spacer } from '../components/Spacer'
import { Row, Col } from '../components/Grid'

import Routes from '../services/Routes'

const heroImageUrl =
  'https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&h=600&q=80'

class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.form = createRef()
  }

  state = {
    latitude: 0,
    longitude: 0
  }

  handleSubmit = event => {
    const {
      suggestion: { latlng }
    } = event
    this.setState(
      {
        latitude: latlng.lat,
        longitude: latlng.lng
      },
      () => {
        this.form.current.submit()
      }
    )
  }

  render() {
    const { latitude, longitude } = this.state

    return (
      <Fragment>
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${heroImageUrl})`
          }}
        >
          <Container>
            <NavBar transparent />
            <Spacer top="20" bottom="32" inner>
              <h2 className="text-4xl font-serif text-white text-center mb-4">
                Smag på den bedste vin
              </h2>
              <Row>
                <Col offset sm="1/2">
                  <form
                    action={Routes.discover_path()}
                    method="GET"
                    onSubmit={this.handleSubmit}
                    ref={this.form}
                  >
                    <input type="hidden" name="latitude" value={latitude} />
                    <input type="hidden" name="longitude" value={longitude} />
                    <SearchBar onChange={event => this.handleSubmit(event)} />
                  </form>
                </Col>
              </Row>
            </Spacer>
          </Container>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default SearchPage
