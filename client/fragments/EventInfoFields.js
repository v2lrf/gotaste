import { gql } from 'apollo-boost'

const EventInfoFields = gql`
  fragment EventInfoFields on Event {
    name
    beginsAt
    slug
    eventHeroImageId: heroImageId
    host {
      logoId
      name
      heroImageId
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
