import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Button({ children, type, kind, onClick }) {
  const classNames = classnames('px-4 h-8 rounded shadow', {
    'bg-red-lightest text-red-darkest border border-red-light hover:bg-red-lighter hover:border-red-light':
      kind === 'primary',
    'bg-white text-red-darkest border border-red-lighter hover:bg-red-lightest':
      kind === 'secondary'
  })

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  kind: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  type: 'submit'
}

export default Button
