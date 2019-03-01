import React from 'react'
import Alert from '.'

describe('Alert', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      kind: 'info'
    }

    component = shallow(<Alert {...props}>Whoa! I am an alert.</Alert>)
  })

  describe('Snapshots', () => {
    it('should match the info snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match the danger snapshot', () => {
      component.setProps({ kind: 'danger' })
      expect(component).toMatchSnapshot()
    })
  })
})
