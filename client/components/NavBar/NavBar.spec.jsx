import React from 'react'
import { NavBar } from '.'

describe('NavBar', () => {
  let component
  beforeEach(() => {
    component = shallow(<NavBar />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
