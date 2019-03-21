import React from 'react'

import GhostLines from './GhostLines'

describe('GhostLines', () => {
  let component
  beforeEach(() => {
    component = shallow(<GhostLines />)
  })

  describe('Snapshots', () => {
    it('should match the default snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
