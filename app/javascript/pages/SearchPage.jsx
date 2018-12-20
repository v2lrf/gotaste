import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Loading from '../components/Loading'

const GET_ALL_BUSINESSES = gql`
  query GetAllBusinesses {
    businesses {
      name
    }
  }
`

const SearchPage = () => (
  <Query query={GET_ALL_BUSINESSES}>
    {({ data, loading, error }) => {
      if (loading) return <Loading />
      if (error) return 'Error...'

      return (
        <div>
          {data.businesses.map(business => (
            <div key={business.name}>{business.name}</div>
          ))}
        </div>
      )
    }}
  </Query>
)

export default SearchPage
