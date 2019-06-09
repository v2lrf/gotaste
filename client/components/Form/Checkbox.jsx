import React from 'react'
import PropTypes from 'prop-types'

function Checkbox({ label, name, onChange, checked }) {
  return (
    // eslint-disable-next-line
    <label className="block text-grey-darker text-sm uppercase">
      <input
        className="mr-2"
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

Checkbox.defaultProps = {
  checked: false
}

export default Checkbox
