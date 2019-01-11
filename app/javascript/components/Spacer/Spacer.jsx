import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const sizes = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '8',
  '10',
  '12',
  '16',
  '20',
  '24',
  '32',
  false
]

function Spacer({
  children,
  top,
  right,
  bottom,
  left,
  vertical,
  horizontal,
  inner,
  display
}) {
  const spacerType = inner ? 'p' : 'm'
  const spacerClasses = classnames({
    [`${spacerType}t-${top}`]: top,
    [`${spacerType}r-${right}`]: right,
    [`${spacerType}b-${bottom}`]: bottom,
    [`${spacerType}l-${left}`]: left,
    [`${spacerType}y-${vertical}`]: vertical,
    [`${spacerType}x-${horizontal}`]: horizontal
  })

  return display === 'inline' ? (
    <span className={spacerClasses}>{children}</span>
  ) : (
    <div className={spacerClasses}>{children}</div>
  )
}

Spacer.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.oneOf(sizes),
  right: PropTypes.oneOf(sizes),
  bottom: PropTypes.oneOf(sizes),
  left: PropTypes.oneOf(sizes),
  vertical: PropTypes.oneOf(sizes),
  horizontal: PropTypes.oneOf(sizes),
  inner: PropTypes.bool,
  display: PropTypes.oneOf(['block', 'inline'])
}

Spacer.defaultProps = {
  display: 'block',
  top: false,
  right: false,
  bottom: false,
  left: false,
  vertical: false,
  horizontal: false,
  inner: false
}

export default Spacer
