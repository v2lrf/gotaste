import React from 'react'
import { Row } from './index'

describe('Row', () => {
  let component
  beforeEach(() => {
    component = render(<Row>See, I am inside a row!</Row>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
