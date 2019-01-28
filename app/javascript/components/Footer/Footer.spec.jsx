import React from 'react'
import { Footer } from '.'

describe('Footer', () => {
  let component
  beforeEach(() => {
    component = shallow(<Footer />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
