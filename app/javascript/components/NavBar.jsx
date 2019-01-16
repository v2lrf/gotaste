import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Routes from '../services/Routes'

const GET_VIEWER = gql`
  query Viewer {
    viewer {
      shortName
    }
  }
`

const NavBar = () => (
  <Query query={GET_VIEWER}>
    {({ data, loading, error }) => {
      if (loading) return 'Loading'
      if (error) return 'Error...'

      return (
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center sm:justify-between py-4">
            <div className="w-1/4 sm:hidden">
              <svg
                className="fill-current text-white h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z" />
              </svg>
            </div>

            <div className="w-1/2 sm:w-auto text-center">
              <a
                href={Routes.root_path()}
                className="text-red text-2xl font-bold no-underline"
              >
                govinu
              </a>
            </div>

            <div className="w-1/4 sm:w-auto sm:flex text-right">
              <div className="hidden sm:block sm:flex sm:items-center ml-1">
                {data.viewer ? (
                  <a
                    href={Routes.destroy_user_session_path()}
                    className="text-white no-underline"
                    data-method="delete"
                  >
                    Sign out
                  </a>
                ) : (
                  <a
                    href={Routes.new_user_session_path()}
                    className="text-white no-underline"
                  >
                    Sign in
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </Query>
)

export default NavBar
