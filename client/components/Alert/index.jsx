import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExclamationCircle,
  faInfoCircle,
  faTimes
} from '@fortawesome/pro-light-svg-icons'

function Alert({ kind, fixed, children }) {
  const [showAlert, setShowAlert] = useState(true)
  const alertClasses = classNames(
    'flex items-center border shadow-lg rounded my-4 py-4 text-sm bg-white text-red-darkest',
    {
      'border-red-light': kind === 'danger',
      'border-red-lightest': kind === 'info',
      'max-w-sm fixed pin-r pin-t mr-4 z-10': fixed
    }
  )
  return showAlert ? (
    <div className={alertClasses}>
      <span className="pl-4 mr-2" role="img" aria-label="ikon" aria-hidden>
        {kind === 'info' && (
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-red-dark text-xl"
          />
        )}
        {kind === 'danger' && (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="text-red-dark text-xl"
          />
        )}
      </span>
      <div className="pr-2 flex-1">{children}</div>
      <button
        className="pr-4 focus:outline-none"
        type="button"
        onClick={() => setShowAlert(false)}
      >
        <FontAwesomeIcon icon={faTimes} className="text-red-darker text-xl" />
      </button>
    </div>
  ) : null
}

Alert.propTypes = {
  kind: PropTypes.oneOf(['info', 'danger']).isRequired,
  fixed: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Alert.defaultProps = {
  fixed: false
}

export default Alert
