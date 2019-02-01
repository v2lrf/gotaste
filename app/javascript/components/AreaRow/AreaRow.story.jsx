import React from 'react'
import { storiesOf } from '@storybook/react'

import { AreaRow } from '.'

const fakeArea = {
  name: 'Indre By',
  businesses: [
    {
      name: 'Test',
      streetName: 'Baggesensgade',
      streetNumber: '13',
      postalCode: '2200',
      city: 'København N'
    }
  ]
}

storiesOf('AreaRow', module).add('Default', () => (
  <div className="p-16">
    <AreaRow {...fakeArea} />
  </div>
))
