import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import GhostCard from './GhostCard'

function GhostLines({ lines }) {
  return Array(lines)
    .fill()
    .map((v, k) => k)
    .map(val => (
      <Fragment key={val}>
        <div className="mb-2">
          <GhostCard height={16} width={100} />
        </div>
        <div className="mb-2">
          <GhostCard height={16} width={75} />
        </div>
      </Fragment>
    ))
}

GhostLines.propTypes = {
  lines: PropTypes.number
}

GhostLines.defaultProps = {
  lines: 2
}

export default GhostLines
