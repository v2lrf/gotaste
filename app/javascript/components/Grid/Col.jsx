import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const widths = [
  'full',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '5/6'
]

function Col({ width, offset, children }) {
  const colClasses = classnames('px-2', {
    [`w-${width}`]: width,
    'ml-auto': offset,
    'mr-auto': offset
  })

  return <div className={colClasses}>{children}</div>
}

Col.propTypes = {
  width: PropTypes.oneOf(widths).isRequired,
  offset: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Col.defaultProps = {
  offset: false
}

export default Col
