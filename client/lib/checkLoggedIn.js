import { gql } from 'apollo-boost'

const OWNER_LOGIN_ROLES = ['OWNER', 'ADMIN']

export function checkOwnerLogin(loggedInUser) {
  if (loggedInUser && OWNER_LOGIN_ROLES.includes(loggedInUser.role)) {
    return true
  }
  return false
}

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          viewer {
            shortName
            role
          }
        }
      `
    })
    .then(({ data }) => ({ loggedInUser: data.viewer }))
    .catch(() => ({ loggedInUser: {} }))
