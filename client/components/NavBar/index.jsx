import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

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

function NavBar() {
  return (
    <div className="bg-white border-b border-grey-light">
      <div className="bg-red-light h-1" />
      <Container>
        <div className="h-auto sm:h-16 flex flex-col sm:flex-row items-center sm:justify-between">
          <div className="my-2 sm:my-0">
            <Link href="/">
              <a className="text-red-light text-2xl font-bold no-underline">
                govinu
              </a>
            </Link>
          </div>
          <nav className="pb-4 pt-1 sm:pb-0 sm:pt-0 overflow-hidden max-w-full">
            <ul className="list-reset flex overflow-x-auto flex-row whitespace-no-wrap text-sm sm:text-base">
              <NavItem to="/about">About</NavItem>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default NavBar
