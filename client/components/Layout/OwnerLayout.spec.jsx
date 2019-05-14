import React from 'react'
import CellarLayout from './CellarLayout'

describe('CellarLayout', () => {
  let component
  beforeEach(() => {
    component = shallow(<CellarLayout>Some content!</CellarLayout>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
