import React from 'react'
import Button from '.'

describe('Button', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      kind: 'primary',
      onClick: () => null
    }

    component = shallow(<Button {...props}>I am a button!</Button>)
  })

  describe('Snapshots', () => {
    it('should match the primary snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match the secondary snapshot', () => {
      component.setProps({ kind: 'secondary' })
      expect(component).toMatchSnapshot()
    })

    it('should match the full width snapshot', () => {
      component.setProps({ fullWidth: true })
      expect(component).toMatchSnapshot()
    })

    it('should match the laoding snapshot', () => {
      component.setProps({ loading: true })
      expect(component).toMatchSnapshot()
    })
  })
})
