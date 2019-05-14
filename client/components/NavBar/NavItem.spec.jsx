import React from 'react'
import NavItem from './NavItem'

describe('NavItem', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      to: '/some-path'
    }
    component = shallow(<NavItem {...props}>Some content</NavItem>)
  })

  describe('Snapshots', () => {
    it('should match the default snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match the active snapshot', () => {
      component.setProps({
        asActive: true,
        router: {
          pathname: '/some-path'
        }
      })
      expect(component).toMatchSnapshot()
    })
  })
})
