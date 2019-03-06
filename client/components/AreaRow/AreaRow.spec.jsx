import React from 'react'
import AreaRow from '.'

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
          address: {
            streetName: 'Baggesensgade',
            streetNumber: '13',
            postalCode: '2200',
            city: 'København N'
          },
          slug: 'test',
          logoId: 'logoId1',
          heroImageId: 'heroImageId1'
        },
        {
          id: '2',
          name: 'Foo',
          address: {
            streetName: 'Bar Street',
            streetNumber: '123',
            postalCode: '2300',
            city: 'København S'
          },
          slug: 'foo',
          logoId: 'logoId2',
          heroImageId: 'heroImageId2'
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
