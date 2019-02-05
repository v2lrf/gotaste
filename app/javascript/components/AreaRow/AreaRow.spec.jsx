import React from 'react'
import { AreaRow } from '.'

describe('AreaRow', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      name: 'Indre By',
      businesses: [
        {
          id: '1',
          name: 'Test',
          streetName: 'Baggesensgade',
          streetNumber: '13',
          postalCode: '2200',
          city: 'København N',
          slug: 'test'
        },
        {
          id: '2',
          name: 'Foo',
          streetName: 'Bar Street',
          streetNumber: '123',
          postalCode: '2300',
          city: 'København S',
          slug: 'foo'
        }
      ]
    }

    component = render(<AreaRow {...props} />)
  })

  describe('Snapshots', () => {
    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
