import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function Input({ label, type, name, autoComplete, inputRef }) {
  return (
    <Fragment>
      {/* eslint-disable-next-line */}
      <label className="block text-red-darkest mb-6 text-sm uppercase">
        {label}
        <input
          type={type}
          name={name}
          autoComplete={autoComplete}
          className="block shadow w-full rounded w-full mt-1 py-2 px-3 border focus:outline-none focus:shadow-outline"
          ref={inputRef}
        />
      </label>
    </Fragment>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel']).isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  inputRef: PropTypes.func
}

Input.defaultProps = {
  autoComplete: '',
  inputRef: () => null
}

export default Input
