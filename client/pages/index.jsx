import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from '../components/Layout'

const SEARCH_FOR_BUSINESSES = gql`
  query searchForBusinesses($latitude: Float!, $longitude: Float!) {
    search(latitude: $latitude, longitude: $longitude, distance: 2000) {
      nodes {
        id
        name
        slug
        streetName
        streetNumber
        postalCode
        city
        logoId
        heroImageId
      }
    }
  }
`

const DEFAULT_LATITUDE = 55.6753
const DEFAULT_LONGITUDE = 12.5703

const Home = () => (
  <Layout>
    <Query
      query={SEARCH_FOR_BUSINESSES}
      variables={{ latitude: DEFAULT_LATITUDE, longitude: DEFAULT_LONGITUDE }}
    >
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        return data.search.nodes.map(node => {
          const { id, slug } = node
          return <div key={id}>{slug}</div>
        })
      }}
    </Query>
  </Layout>
)

export default Home
