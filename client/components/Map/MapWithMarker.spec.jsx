import React from 'react'
import { MapWithMarker } from '.'

describe('MapWithMarker', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      latitude: 55.6753,
      longitude: 12.5703
    }

    component = render(<MapWithMarker {...props} />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
