import React from 'react'
import OwnerLayout from './OwnerLayout'

describe('OwnerLayout', () => {
  let component
  beforeEach(() => {
    component = shallow(<OwnerLayout>Some content!</OwnerLayout>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
