import { gql } from 'apollo-boost'

const EventInfoFields = gql`
  fragment EventInfoFields on Event {
    name
    beginsAt
    slug
    host {
      logoId
      name
      address {
        streetName
        streetNumber
        postalCode
        city
      }
    }
  }
`

export default EventInfoFields
