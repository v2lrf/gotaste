import React from 'react'
import Spacer from './Spacer'

describe('Spacer', () => {
  let component
  beforeEach(() => {
    component = render(<Spacer>I am inside a spacer!</Spacer>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
