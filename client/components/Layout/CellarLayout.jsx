import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

import Container from '../Container'
import NavItem from '../NavBar/NavItem'

function CellarLayout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-white">
        <Container>
          <div className="h-auto sm:h-16 flex items-center justify-between">
            <div className="my-4 sm:my-0">
              <Link href="/">
                <a className="flex text-red-light text-xl font-semibold no-underline">
                  <img
                    src="/static/gotaste-120.png"
                    alt="GoTaste"
                    className="h-6 pr-2"
                  />
                  GoTaste Cellar
                </a>
              </Link>
            </div>
            <ul className="list-reset flex flex-row">
              <NavItem asActive to="/cellar">
                Overblik
              </NavItem>
              <NavItem asActive to="#">
                Analytics
              </NavItem>
              <NavItem asActive to="#">
                Begivenheder
              </NavItem>
              <NavItem asActive to="#">
                Anmeldelser
              </NavItem>
              <NavItem asActive to="/cellar/profile">
                Profil
              </NavItem>
              <div className="mx-2 my-1 border border-red-lightest" />
              <NavItem to="/sign-out">Log ud</NavItem>
            </ul>
          </div>
        </Container>
      </div>
      {children}
    </Fragment>
  )
}

CellarLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

CellarLayout.defaultProps = {
  title: 'GoTaste Cellar'
}

export default CellarLayout
