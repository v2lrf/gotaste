import React, { Fragment } from 'react'
import Link from 'next/link'
import { Query } from 'react-apollo'
import Router from 'next/router'
import NProgress from 'nprogress'

import Container from '../Container'
import NavItem from './NavItem'

import { GET_VIEWER } from './queries'

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
    <div className="bg-white">
      <Container>
        <div className="h-auto sm:h-16 flex flex-col sm:flex-row items-center sm:justify-between">
          <div className="my-2 sm:my-0">
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
          <nav className="pb-4 pt-1 sm:pb-0 sm:pt-0 overflow-hidden max-w-full">
            <ul className="list-reset flex overflow-x-scroll scrolling-touch flex-row whitespace-no-wrap text-sm sm:text-base">
              <NavItem to="/discover">Gå på opdagelse</NavItem>
              <NavItem to="#">Begivenheder</NavItem>
              <NavItem to="#">Forhandlere</NavItem>
              <div className="mx-2 my-1 border border-red-lightest" />
              <Query query={GET_VIEWER}>
                {({ data }) =>
                  data.viewer ? (
                    <NavItem to="/sign-out">Log ud</NavItem>
                  ) : (
                    <Fragment>
                      <NavItem to="/login">Log ind</NavItem>
                    </Fragment>
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
