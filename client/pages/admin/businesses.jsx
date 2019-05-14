import React from 'react'
import { withApollo } from 'react-apollo'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'

import checkLoggedIn, { checkAdminLogin } from '../../lib/checkLoggedIn'
import redirect from '../../lib/redirect'

import AdminLayout from '../../components/Layout/AdminLayout'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'

const GET_BUSINESSESES = gql`
  query getBusinessesForAdmin {
    businesses(orderBy: NAME_ASC) {
      nodes {
        name
        slug
      }
    }
  }
`

function BusinessesPage() {
  const { data, loading } = useQuery(GET_BUSINESSESES)

  if (loading) return 'loading..'

  const { businesses } = data

  return (
    <AdminLayout title="Forretninger | GoTaste Admin">
      <Container>
        <Spacer top="12" bottom="20">
          <div className="bg-white border rounded shadow">
            <table className="w-full p-5 text-grey-darker text-left">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-grey-lighter uppercase text-sm text-grey border-b border-grey-light">
                    Navn
                  </th>
                  <th className="py-4 px-6 bg-grey-lighter uppercase text-sm text-grey border-b border-grey-light">
                    Slug
                  </th>
                  <th className="py-4 px-6 bg-grey-lighter uppercase text-sm text-grey border-b border-grey-light">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {businesses.nodes.map(business => (
                  <tr className="hover:bg-blue-lightest">
                    <td className="py-4 px-6 border-b border-grey-light">
                      {business.name}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {business.slug}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      Cellar
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Spacer>
      </Container>
    </AdminLayout>
  )
}

BusinessesPage.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)
  if (!checkAdminLogin(loggedInUser)) {
    redirect(context, '/')
  }

  return {}
}

export default withApollo(BusinessesPage)
