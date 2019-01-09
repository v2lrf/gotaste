import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Places from 'places.js'

class SearchBar extends Component {
  componentDidMount() {
    const { onChange } = this.props
    const placesAutocomplete = Places({
      appId: 'plLOLX7HJZL4',
      apiKey: '8d3d74f780371b26a3f07b788a85e592',
      container: this.autoCompletePlace
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
