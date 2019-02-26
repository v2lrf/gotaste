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
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
