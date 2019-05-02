import React from 'react'
import PropTypes from 'prop-types'

function LinkGroup({ label, children }) {
  return (
    <div className="text-right mb-4">
      {label && (
        <span className="mr-2 text-grey-dark text-sm font-bold uppercase">
          {label}
        </span>
      )}
      {children}
    </div>
  )
}

LinkGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired
}

LinkGroup.defaultProps = {
  label: null
}

export default LinkGroup
