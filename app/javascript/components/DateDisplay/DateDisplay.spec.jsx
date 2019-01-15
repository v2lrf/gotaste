import React from 'react'
import { DateDisplay } from '.'

describe('DateDisplay', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      timestamp: 1546627341836
    }

    component = shallow(<DateDisplay {...props} />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
