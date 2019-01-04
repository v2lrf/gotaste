import React from 'react'
import PropTypes from 'prop-types'

const SearchResults = ({ businesses }) => (
  <div>
    {businesses.map(business => (
      <div key={business.name}>{business.name}</div>
    ))}
  </div>
)

SearchResults.propTypes = {
  businesses: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default SearchResults
