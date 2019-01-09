import React, { Fragment } from 'react'

import Container from '../components/Container/Container'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar/SearchBar'
import Spacer from '../components/Spacer/Spacer'

const heroImageUrl =
  'https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&h=600&q=80'

const SearchPage = () => (
  <Fragment>
    <div
      className="bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${heroImageUrl})`
      }}
    >
      <Container>
        <NavBar />
        <Spacer top="20" bottom="32" inner>
          <h2 className="text-4xl font-serif text-white text-center mb-4">
            Smag på den bedste vin
          </h2>
          <SearchBar onChange={event => console.log(event)} />
        </Spacer>
      </Container>
    </div>
  </Fragment>
)

export default SearchPage
