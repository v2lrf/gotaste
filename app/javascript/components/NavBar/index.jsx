import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Query } from 'react-apollo'

import { GET_VIEWER } from './queries'
import { Container } from '../Container'
import { NavItem } from './NavItem'
import Routes from '../../services/Routes'

export function NavBar({ transparent }) {
  const wrapperClasses = classnames({
    'bg-red-darker': !transparent,
    'bg-transparent': transparent
  })

  return (
    <Query query={GET_VIEWER}>
      {({ data, loading, error }) => {
        if (loading) return 'Loading'
        if (error) return 'Error...'
        return (
          <div className={wrapperClasses}>
            <Container>
              <div className="h-auto sm:h-16 flex flex-col sm:flex-row items-center sm:justify-between">
                <div className="my-2 sm:my-0">
                  <a
                    href={Routes.root_path()}
                    className="text-white text-2xl font-bold no-underline"
                  >
                    govinu
                  </a>
                </div>
                <nav className="pb-4 pt-1 sm:pb-0 sm:pt-0 overflow-hidden max-w-full">
                  <ul className="list-reset flex overflow-x-auto flex-row whitespace-no-wrap text-sm sm:text-base">
                    <NavItem to={Routes.discover_path()} label="Begivenheder" />
                    <NavItem to="#" label="Forhandlere" />
                    {data.viewer ? (
                      <NavItem
                        to={Routes.destroy_user_session_path()}
                        label="Log ud"
                      />
                    ) : (
                      <Fragment>
                        <NavItem
                          to={Routes.new_user_registration_path()}
                          label="Opret bruger"
                        />
                        <NavItem
                          to={Routes.new_user_session_path()}
                          label="Login"
                        />
                      </Fragment>
                    )}
                  </ul>
                </nav>
              </div>
            </Container>
          </div>
        )
      }}
    </Query>
  )
}

NavBar.propTypes = {
  transparent: PropTypes.bool
}

NavBar.defaultProps = {
  transparent: false
}

export default NavBar