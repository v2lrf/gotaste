import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function Input({
  label,
  type,
  name,
  value,
  autoComplete,
  inputRef,
  placeholder,
  onChange
}) {
  return (
    <Fragment>
      {/* eslint-disable-next-line */}
      <label className="block text-grey-darker mb-6 text-sm uppercase">
        {label}
        <input
          type={type}
          name={name}
          value={value}
          autoComplete={autoComplete}
          className="block w-full rounded w-full mt-1 py-2 px-3 border focus:outline-none focus:shadow-outline"
          ref={inputRef}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </Fragment>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'url']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  inputRef: PropTypes.func,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
  autoComplete: '',
  inputRef: () => null,
  placeholder: ''
}

export default Input
