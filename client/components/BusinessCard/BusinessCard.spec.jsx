import React from 'react'
import BusinessCard from '.'

describe('BusinessCard', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      href: 'some-path',
      name: 'Fine Wines',
      streetName: 'Fake Street',
      streetNumber: '123',
      postalCode: '6660',
      city: 'New Awesome',
      logoId: 'logoId',
      heroImageId: 'heroImageId'
    }

    component = shallow(<BusinessCard {...props} />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
