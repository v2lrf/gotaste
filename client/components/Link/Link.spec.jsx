import React from 'react'
import Link from './Link'

describe('Link', () => {
  let component
  beforeEach(() => {
    component = shallow(<Link>Some content!</Link>)
  })

  describe('Snapshots', () => {
    it('should match the default snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match the snapshot with custom href', () => {
      component.setProps({ href: '/some-path' })
      expect(component).toMatchSnapshot()
    })

    it('should match the snapshot with custom className', () => {
      component.setProps({ className: 'foo bar' })
      expect(component).toMatchSnapshot()
    })
  })

  describe('Actions', () => {
    it('should call the onClick handler when clicked', () => {
      const onClickHandler = jest.fn()
      component.setProps({ onClick: onClickHandler })
      component.simulate('click')
      expect(onClickHandler).toHaveBeenCalled()
    })
  })
})
