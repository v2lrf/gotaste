import React from 'react'
import CookieWarning from './CookieWarning'

describe('CookieWarning', () => {
  let component
  beforeEach(() => {
    component = render(<CookieWarning />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
