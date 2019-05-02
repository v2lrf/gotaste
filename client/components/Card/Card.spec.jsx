import React from 'react'
import Card from '.'

describe('Card', () => {
  let component
  beforeEach(() => {
    component = shallow(<Card>Some content!</Card>)
  })

  describe('Snapshots', () => {
    it('should match the default snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match a snapshot with a title', () => {
      component.setProps({ title: 'Some title' })
      expect(component).toMatchSnapshot()
    })
  })
})
