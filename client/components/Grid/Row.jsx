import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Row({ children, noWrap }) {
  const rowClasses = classNames('flex -mx-2', {
    'flex-no-wrap': noWrap,
    'flex-wrap': !noWrap
  })

  return (
    <div className="px-2">
      <div className={rowClasses}>{children}</div>
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  noWrap: PropTypes.bool
}

Row.defaultProps = {
  noWrap: false
}

export default Row
