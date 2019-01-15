import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Places from 'places.js'

export class SearchBar extends Component {
  componentDidMount() {
    const { onChange } = this.props
    const placesAutocomplete = Places({
      appId: process.env.ALGOLIA_PLACES_APP_ID,
      apiKey: process.env.ALGOLIA_PLACES_API_KEY,
      container: this.autoCompletePlace,
      countries: ['DK']
    })
    placesAutocomplete.on('change', event => onChange(event))
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.autoCompletePlace = input
          }}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SearchBar
