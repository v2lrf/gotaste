import React from 'react'

import GhostCard from './GhostCard'

describe('GhostCard', () => {
  let component
  beforeEach(() => {
    component = shallow(<GhostCard height={200} />)
  })

  describe('Snapshots', () => {
    it('should match the default snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match the snapshot with a custom width', () => {
      component.setProps({ width: 50 })
      expect(component).toMatchSnapshot()
    })
  })
})
