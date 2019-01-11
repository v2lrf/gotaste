import React from 'react'
import PropTypes from 'prop-types'

function Row({ children }) {
  return (
    <div className="px-2">
      <div className="flex flex-wrap -mx-2">{children}</div>
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired
}

export default Row
