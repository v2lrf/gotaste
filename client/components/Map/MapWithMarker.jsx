import React from 'react'
import PropTypes from 'prop-types'
import { StaticMap, Marker } from 'react-map-gl'

import MapPin from './MapPin'

function MapWithMarker({ latitude, longitude, height, width, className }) {
  return (
    <StaticMap
      mapboxApiAccessToken={process.env.MAP_BOX_API_KEY}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      width={width}
      height={height}
      latitude={latitude}
      longitude={longitude}
      zoom={13}
      className={className}
    >
      <Marker latitude={latitude} longitude={longitude}>
        <MapPin />
      </Marker>
    </StaticMap>
  )
}

MapWithMarker.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
}

MapWithMarker.defaultProps = {
  height: 200,
  width: '100%',
  className: ''
}

export default MapWithMarker
