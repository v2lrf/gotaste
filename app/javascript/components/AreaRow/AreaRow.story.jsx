import React from 'react'
import { storiesOf } from '@storybook/react'

import { AreaRow } from '.'

const fakeArea = {
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

storiesOf('AreaRow', module).add('Default', () => (
  <div className="p-16">
    <AreaRow {...fakeArea} />
  </div>
))
