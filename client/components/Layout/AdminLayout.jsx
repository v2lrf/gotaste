import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

import Container from '../Container'
import NavItem from '../NavBar/NavItem'

function AdminLayout({ title, children }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-white">
        <Container>
          <div className="h-auto sm:h-16 flex items-center justify-between">
            <div className="my-4 sm:my-0">
              <Link href="/admin">
                <a className="flex text-red-light text-xl font-semibold no-underline">
                  <img
                    src="/static/gotaste-120.png"
                    alt="GoTaste"
                    className="h-6 pr-2"
                  />
                  GoTaste Admin
                </a>
              </Link>
            </div>
            <ul className="list-reset flex flex-row">
              <NavItem asActive to="/admin">
                Overblik
              </NavItem>
              <NavItem asActive to="/admin/businesses">
                Forretninger
              </NavItem>
              <div className="mx-2 my-1 border border-red-lightest" />
              <NavItem to="/">GoTaste</NavItem>
              <NavItem to="/sign-out">Log ud</NavItem>
            </ul>
          </div>
        </Container>
      </div>
      {children}
    </Fragment>
  )
}

AdminLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

AdminLayout.defaultProps = {
  title: 'GoTaste Admin'
}

export default AdminLayout
