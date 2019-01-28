import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { getParameterByName } from '../helpers'
import { Container } from '../components/Container'
import { NavBar } from '../components/NavBar'

const SEARCH_FOR_BUSINESSES = gql`
  query searchForBusinesses($latitude: Float!, $longitude: Float!) {
    search(latitude: $latitude, longitude: $longitude) {
      nodes {
        id
        name
      }
    }
  }
`

function DiscoverPage() {
  const latitude = parseFloat(getParameterByName('latitude'))
  const longitude = parseFloat(getParameterByName('longitude'))
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Query
          query={SEARCH_FOR_BUSINESSES}
          variables={{ latitude, longitude }}
        >
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            return data.search.nodes.map(node => {
              const { id, name } = node
              return <div key={id}>{name}</div>
            })
          }}
        </Query>
      </Container>
    </Fragment>
  )
}

export default DiscoverPage
