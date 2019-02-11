import gql from 'graphql-tag'

export const GET_VIEWER = gql`
  query Viewer {
    viewer {
      shortName
    }
  }
`

export default GET_VIEWER
