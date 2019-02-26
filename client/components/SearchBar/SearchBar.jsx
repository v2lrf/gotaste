import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Places from 'places.js'

class SearchBar extends Component {
  componentDidMount() {
    const { onChange } = this.props

    const placesAutocomplete = Places({
      appId: process.env.ALGOLIA_PLACES_APP_ID,
      apiKey: process.env.ALGOLIA_PLACES_API_KEY,
      container: this.autoCompletePlace,
      countries: ['DK']
    })

    placesAutocomplete.on('change', event => {
      const {
        suggestion: { latlng }
      } = event
      onChange({
        latitude: latlng.lat,
        longitude: latlng.lng
      })
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.autoCompletePlace = input
          }}
          placeholder="Indtast addresse"
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SearchBar
