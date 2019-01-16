import React from 'react'
import PropTypes from 'prop-types'

export function NavItem({ to, label }) {
  return (
    <li className="mr-6">
      <a
        className="block text-white no-underline hover:underline focus:underline"
        href={to}
      >
        {label}
      </a>
    </li>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default NavItem
