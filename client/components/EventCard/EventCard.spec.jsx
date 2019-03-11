import React from 'react'
import moment from 'moment-timezone'
import EventCard from '.'

moment.tz.setDefault('Europe/Copenhagen')

describe('EventCard', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      name: 'Blindsmagningsaften',
      beginsAt: '2019-03-07T18:15:00Z',
      slug: '2018-03-07-blindsmagningsaften',
      host: {
        logoId: 'Govinu/logos/Wh1V3cNhbCPrv3ZLXcxcgyWJ',
        name: 'Erik Sørensen Vin',
        address: {
          streetName: 'Store Kongensgade',
          streetNumber: '124',
          postalCode: '1264',
          city: 'København K'
        }
      }
    }
    component = shallow(<EventCard {...props} />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
