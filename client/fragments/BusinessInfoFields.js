import { gql } from 'apollo-boost'

const BusinessInfoFields = gql`
  fragment BusinessInfoFields on Business {
    id
    name
    slug
    address {
      streetName
      streetNumber
      postalCode
      city
    }
    logoId
    heroImageId
  }
`

export default BusinessInfoFields
