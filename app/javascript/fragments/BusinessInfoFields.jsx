import gql from 'graphql-tag'

const BusinessInfoFields = gql`
  fragment BusinessInfoFields on Business {
    id
    name
    slug
    streetName
    streetNumber
    postalCode
    city
    logoId
  }
`

export default BusinessInfoFields
