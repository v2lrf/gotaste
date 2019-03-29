import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Row({ children, noWrap, className }) {
  const rowClasses = classNames('flex -mx-2', {
    'flex-no-wrap': noWrap,
    'flex-wrap': !noWrap,
    [className]: className
  })

  return (
    <div className="px-2">
      <div className={rowClasses}>{children}</div>
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  noWrap: PropTypes.bool,
  className: PropTypes.string
}

Row.defaultProps = {
  noWrap: false,
  className: null
}

export default Row
