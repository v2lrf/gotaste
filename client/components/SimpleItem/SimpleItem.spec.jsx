import React from 'react'
import { faBrowser } from '@fortawesome/pro-light-svg-icons'
import SimpleItem from '.'

describe('SimpleItem', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      icon: faBrowser
    }
    component = shallow(
      <SimpleItem {...props}>I am content with in a SimpleItem</SimpleItem>
    )
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
