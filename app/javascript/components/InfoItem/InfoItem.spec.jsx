import React from 'react'
import { InfoItem } from '.'

describe('InfoItem', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      imageSrc: 'https://via.placeholder.com/150',
      headline: 'I am a headline',
      tagline: 'I am a tagline'
    }

    component = shallow(<InfoItem {...props} />)
  })

  describe('Snapshots', () => {
    it('should match the regular snapshot', () => {
      expect(component).toMatchSnapshot()
    })

    it('should match the large snapshot', () => {
      component.setProps({
        ...props,
        large: true
      })
      expect(component).toMatchSnapshot()
    })
  })
})
