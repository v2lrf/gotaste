import React from 'react'

import GhostCard from '.'

describe('GhostCard', () => {
  let component
  beforeEach(() => {
    component = shallow(<GhostCard width={500} height={200} />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
