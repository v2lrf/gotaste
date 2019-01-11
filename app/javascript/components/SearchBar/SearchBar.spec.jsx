import React from 'react'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      onChange: jest.fn()
    }

    component = render(<SearchBar {...props} />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
