import React from 'react'
import { Col } from './index'

describe('Col', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      width: 'full'
    }

    component = render(<Col {...props}>See, I am inside a col!</Col>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
