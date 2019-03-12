import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function NavItem({ to, children }) {
  return (
    <li>
      <Link prefetch href={to}>
        <a className="block py-1 px-2 text-red-light font-semibold no-underline hover:bg-red-lightest rounded">
          {children}
        </a>
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default NavItem
