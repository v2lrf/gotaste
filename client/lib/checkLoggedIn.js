import gql from 'graphql-tag'

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
    .then(({ data }) => {
      return { loggedInUser: data.viewer }
    })
    .catch(() => {
      // Fail gracefully
      return { loggedInUser: {} }
    })
