import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Alert({ kind, children }) {
  const alertClasses = classNames(
    'flex border shadow rounded my-4 py-2 text-sm',
    {
      'bg-red-lightest text-red-darkest border-red-light': kind === 'danger',
      'bg-white text-red-darkest border-red-lighter': kind === 'info'
    }
  )
  return (
    <div className={alertClasses}>
      <span className="pl-2 mr-2" role="img" aria-label="ikon" aria-hidden>
        {kind === 'info' && '⚠️'}
        {kind === 'danger' && '🚨'}
      </span>
      <div className="pr-2">{children}</div>
    </div>
  )
}

Alert.propTypes = {
  kind: PropTypes.oneOf(['info', 'danger']).isRequired,
  children: PropTypes.node.isRequired
}

export default Alert