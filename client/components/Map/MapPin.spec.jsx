import React from 'react'
import MapPin from './MapPin'

describe('MapPin', () => {
  let component
  beforeEach(() => {
    component = render(<MapPin />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
