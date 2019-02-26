import React from 'react'
import Container from '.'

describe('Container', () => {
  let component
  beforeEach(() => {
    component = shallow(<Container>I know kung fu.</Container>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match the narrow snapshot', () => {
      component.setProps({ narrow: true })
      expect(component).toMatchSnapshot()
    })
  })
})
