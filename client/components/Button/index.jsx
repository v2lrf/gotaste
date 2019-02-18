import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Button({ children, type, kind }) {
  const classNames = classnames('px-6 h-10 rounded shadow tracking-wide', {
    'bg-red-darker text-white border border-red-darker hover:bg-red-darkest hover:border-red-darkest':
      kind === 'primary',
    'bg-white text-red-darker border border-red-darker hover:bg-red-darkest hover:text-white':
      kind === 'secondary'
  })

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  kind: PropTypes.oneOf(['primary', 'secondary']).isRequired
}

Button.defaultProps = {
  type: 'submit'
}

export default Button
