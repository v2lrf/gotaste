import { gql } from 'apollo-boost'

const ADMIN_ROLE = 'ADMIN'
const OWNER_LOGIN_ROLES = ['OWNER', ADMIN_ROLE]

export function checkAdminLogin(loggedInUser) {
  if (loggedInUser && loggedInUser.role === ADMIN_ROLE) {
    return true
  }
  return false
}

export function checkOwnerLogin(loggedInUser) {
  if (loggedInUser && OWNER_LOGIN_ROLES.includes(loggedInUser.role)) {
    return true
  }
  return false
}

export function getOwnerSlug(loggedInUser) {
  const {
    businesses: { nodes }
  } = loggedInUser

  if (!checkOwnerLogin(loggedInUser)) {
    return null
  }

  // What if an employee works at multiple businesses ?
  return nodes[0].slug
}

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          viewer {
            shortName
            role
            businesses {
              nodes {
                slug
              }
            }
          }
        }
      `
    })
    .then(({ data }) => ({ loggedInUser: data.viewer }))
    .catch(() => ({ loggedInUser: {} }))
