import { gql } from 'apollo-boost'

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          viewer {
            shortName
          }
        }
      `
    })
    .then(({ data }) => ({ loggedInUser: data.viewer }))
    .catch(() => ({ loggedInUser: {} }))
