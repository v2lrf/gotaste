import React from 'react'
import Spacer from '.'

describe('Spacer', () => {
  let component
  beforeEach(() => {
    component = shallow(<Spacer>I am inside a spacer!</Spacer>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
