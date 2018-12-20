import React from 'react'

const SearchResults = ({ businesses }) => (
  <div>
    {businesses.map(business => (
      <div key={business.name}>{business.name}</div>
    ))}
  </div>
)

export default SearchResults
