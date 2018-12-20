import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Loading from '../Loading'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

const GET_ALL_BUSINESSES = gql`
  query GetAllBusinesses {
    businesses {
      name
    }
  }
`

const Search = () => (
  <Query query={GET_ALL_BUSINESSES}>
    {({ data, loading, error }) => {
      if (loading) return <Loading />
      if (error) return 'Error...'

      return (
        <Fragment>
          <SearchBar />
          <SearchResults businesses={data.businesses} />
        </Fragment>
      )
    }}
  </Query>
)

export default Search
