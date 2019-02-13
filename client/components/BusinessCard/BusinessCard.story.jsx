import React from 'react'
import { storiesOf } from '@storybook/react'

import BusinessCard from '.'

const fakeBusiness = {
  name: 'Vinhanen',
  streetName: 'Baggesensgade',
  streetNumber: '13',
  postalCode: '2200',
  city: 'København N'
}

storiesOf('BusinessCard', module).add('Default', () => (
  <div className="p-16">
    <BusinessCard href="#" {...fakeBusiness} />
  </div>
))
