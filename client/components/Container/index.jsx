import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Container({ children, narrow }) {
  const containerClasses = classNames('container mx-auto px-4', {
    'max-w-xl': narrow
  })
  return <div className={containerClasses}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  narrow: PropTypes.bool
}

Container.defaultProps = {
  narrow: false
}

export default Container
