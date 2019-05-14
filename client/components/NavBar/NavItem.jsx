import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { withRouter } from 'next/router'
import classNames from 'classnames'

function NavItem({ router, to, children, asActive }) {
  const linkClasses = classNames(
    'block py-4 px-4 sm:py-1 sm:px-2 text-red-light font-semibold no-underline hover:bg-red-lightest rounded',
    {
      'bg-red-lightest': router.pathname === to && asActive
    }
  )
  return (
    <li>
      <Link prefetch href={to}>
        <a className={linkClasses}>{children}</a>
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  // Eslint disabled because it's a prop provided by Next.js
  // eslint-disable-next-line
  router: PropTypes.object,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  asActive: PropTypes.bool
}

NavItem.defaultProps = {
  asActive: false
}

export default withRouter(NavItem)
