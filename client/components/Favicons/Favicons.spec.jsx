import React from 'react'
import Favicons from '.'

describe('Favicons', () => {
  let component
  beforeEach(() => {
    component = render(<Favicons />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
