import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import componentConfig from '../componentConfig'

function Button({ children, type, kind }) {
  const classNames = classnames(componentConfig.button.base, {
    [componentConfig.button.primary]: kind === 'primary',
    [componentConfig.button.secondary]: kind === 'secondary'
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
