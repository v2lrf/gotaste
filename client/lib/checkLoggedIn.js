import { gql } from 'apollo-boost'

const OWNER_LOGIN_ROLES = ['OWNER', 'ADMIN']

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
