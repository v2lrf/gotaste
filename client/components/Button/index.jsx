import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinnerThird } from '@fortawesome/pro-light-svg-icons'

function Button({ children, type, kind, onClick, fullWidth, loading }) {
  const classNames = classnames('px-4 h-8 rounded shadow', {
    'bg-red-lightest text-red-dark font-semibold border border-red-lighter hover:bg-red-lighter':
      kind === 'primary',
    'bg-white text-red-darkest border border-red-lighter hover:bg-red-lightest':
      kind === 'secondary',
    'w-full': fullWidth
  })

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames} onClick={onClick}>
      {loading ? <FontAwesomeIcon spin icon={faSpinnerThird} /> : children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  kind: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool
}

Button.defaultProps = {
  type: 'submit',
  onClick: () => null,
  fullWidth: false,
  loading: false
}

export default Button
