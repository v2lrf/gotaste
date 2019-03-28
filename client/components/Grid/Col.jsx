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
  '5/6',
  false
]

function Col({ xs, sm, md, lg, xl, offset, noShrink, children }) {
  const colClasses = classnames('px-2', {
    'w-full': !xs,
    [`w-${xs}`]: xs,
    [`sm:w-${sm}`]: sm,
    [`md:w-${md}`]: md,
    [`lg:w-${lg}`]: lg,
    [`xl:w-${xl}`]: xl,
    'flex-no-shrink': noShrink,
    'ml-auto': offset,
    'mr-auto': offset
  })

  return <div className={colClasses}>{children}</div>
}

Col.propTypes = {
  xs: PropTypes.oneOf(widths),
  sm: PropTypes.oneOf(widths),
  md: PropTypes.oneOf(widths),
  lg: PropTypes.oneOf(widths),
  xl: PropTypes.oneOf(widths),
  offset: PropTypes.bool,
  noShrink: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Col.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  noShrink: false,
  offset: false
}

export default Col
