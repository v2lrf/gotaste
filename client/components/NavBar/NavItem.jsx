import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function NavItem({ to, children }) {
  return (
    <li className="mr-6">
      <Link prefetch href={to}>
        <a className="block text-red-darkest no-underline hover:underline focus:underline">
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
