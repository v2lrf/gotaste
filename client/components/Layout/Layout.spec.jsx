import React from 'react'
import Layout from '.'

describe('Footer', () => {
  let component
  beforeEach(() => {
    component = shallow(<Layout>Some content!</Layout>)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
