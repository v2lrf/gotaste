import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

function GhostCard({ height, width }) {
  return (
    <ContentLoader
      height={height}
      width={width}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      className="mb-4"
    >
      <rect rx="4" ry="4" width={width} height={height} />
    </ContentLoader>
  )
}

GhostCard.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default GhostCard
