import React from 'react'
import Input from './Input'

describe('Input', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      label: 'Email',
      type: 'email',
      name: 'email',
      value: 'I am an initial value',
      onChange: jest.fn()
    }
    component = shallow(<Input {...props}>Some content!</Input>)
  })

  describe('Snapshots', () => {
    it('should match the default snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match the snapshot with custom autoComplete', () => {
      component.setProps({ autoComplete: 'current-password' })
      expect(component).toMatchSnapshot()
    })

    it('should match the snapshot with a placeholder', () => {
      component.setProps({ placeholder: 'Enter some value in me' })
      expect(component).toMatchSnapshot()
    })
  })

  describe('Actions', () => {
    it('should call the onChange handler when a value changes', () => {
      component
        .find('input')
        .simulate('change', { target: { value: 'New text!' } })
      expect(props.onChange).toHaveBeenCalled()
    })
  })
})
