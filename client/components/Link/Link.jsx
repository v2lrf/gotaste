import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Link({ href, children, className, onClick }) {
  const linkClasses = classnames('text-red-dark no-underline hover:underline', {
    [className]: className
  })
  return (
    <a href={href} className={linkClasses} onClick={onClick}>
      {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

Link.defaultProps = {
  href: '#',
  className: null,
  onClick: null
}

export default Link
