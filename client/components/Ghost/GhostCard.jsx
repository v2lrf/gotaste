import React from 'react'
import PropTypes from 'prop-types'

function GhostCard({ height, width }) {
  return (
    <div
      className="rounded shimmer"
      style={{
        height: `${height}px`,
        width: `${width}%`
      }}
      aria-disabled
      aria-label="Henter data"
    />
  )
}

GhostCard.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number
}

GhostCard.defaultProps = {
  width: 100
}

export default GhostCard
