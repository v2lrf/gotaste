import React from 'react'
import Container from './Container'

describe('Container', () => {
  let component
  beforeEach(() => {
    component = shallow(<Container>I know kung fu.</Container>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
