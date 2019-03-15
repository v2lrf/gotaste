import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Router from 'next/router'
import NProgress from 'nprogress'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/pro-light-svg-icons'

import Container from '../Container'
import NavItem from './NavItem'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}

const GET_VIEWER = gql`
  query Viewer {
    viewer {
      shortName
    }
  }
`

function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    function handleNavToggle() {
      setShowMobileNav(!showMobileNav)
    }

    if (showMobileNav) {
      document.addEventListener('click', handleNavToggle)
    } else {
      document.removeEventListener('click', handleNavToggle)
    }

    return () => {
      document.removeEventListener('click', handleNavToggle)
    }
  })

  const navListClasses = classNames(
    'list-reset sm:flex flex-col sm:flex-row absolute sm:static bg-white pin-t pin-r mt-10 sm:mt-0 rounded shadow-lg sm:shadow-none whitespace-no-wrap z-10',
    {
      hidden: !showMobileNav
    }
  )

  return (
    <div className="bg-white">
      <Container>
        <div className="h-auto sm:h-16 flex items-center justify-between">
          <div className="my-4 sm:my-0">
            <Link href="/">
              <a className="flex text-red-light text-xl font-semibold no-underline">
                <img
                  src="/static/govinu-120.png"
                  alt="Govinu"
                  className="h-6 pr-2"
                />
                Govinu
              </a>
            </Link>
          </div>
          <nav className="max-w-full relative">
            <button
              type="button"
              className="sm:hidden"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <FontAwesomeIcon icon={faBars} className="text-red-light" />
            </button>
            <ul className={navListClasses}>
              <NavItem to="/discover">Gå på opdagelse</NavItem>
              <NavItem to="#">Begivenheder</NavItem>
              <NavItem to="#">Forhandlere</NavItem>
              <div className="mx-2 my-1 border border-red-lightest" />
              <Query query={GET_VIEWER}>
                {({ data }) =>
                  data.viewer ? (
                    <NavItem to="/sign-out">Log ud</NavItem>
                  ) : (
                    <NavItem to="/login">Log ind</NavItem>
                  )
                }
              </Query>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default NavBar
