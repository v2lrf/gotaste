import React from 'react'
import NavBar from '.'

describe('NavBar', () => {
  let component
  beforeEach(() => {
    component = shallow(<NavBar />)
  })

  describe('Snapshots', () => {
    // Currently disabled because Enzyme does not yet have full support for hooks.
    // Following this issue https://github.com/airbnb/enzyme/issues/1553 for a fix.
    xit('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
