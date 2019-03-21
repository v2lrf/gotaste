import React from 'react'

import GhostCard from './GhostCard'

describe('GhostCard', () => {
  let component
  beforeEach(() => {
    component = shallow(<GhostCard height={200} />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
