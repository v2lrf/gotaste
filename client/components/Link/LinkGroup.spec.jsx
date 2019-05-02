import React from 'react'
import LinkGroup from './LinkGroup'

describe('LinkGroup', () => {
  let component
  beforeEach(() => {
    component = shallow(<LinkGroup>Some content!</LinkGroup>)
  })

  describe('Snapshots', () => {
    it('should match the default snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match a snapshot with a label', () => {
      component.setProps({ label: 'Some label' })
      expect(component).toMatchSnapshot()
    })
  })
})
