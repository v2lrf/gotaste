import React from 'react'
import PropTypes from 'prop-types'

export function NavItem({ to, label, dataMethod }) {
  return (
    <li className="mr-6">
      <a
        className="block text-red-dark no-underline hover:underline focus:underline"
        href={to}
        data-method={dataMethod}
      >
        {label}
      </a>
    </li>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataMethod: PropTypes.string
}

NavItem.defaultProps = {
  dataMethod: null
}

export default NavItem
