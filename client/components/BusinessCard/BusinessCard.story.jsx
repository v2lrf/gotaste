import React from 'react'
import { storiesOf } from '@storybook/react'

import BusinessCard from '.'

const fakeBusiness = {
  name: 'Erik Sørensen Vin',
  slug: 'erik-sorensen-vin',
  heroImageId: 'GoTaste/hero_images/6c2543d032ac10028fc849e2b97cb1f7',
  logoId: 'GoTaste/logos/Wh1V3cNhbCPrv3ZLXcxcgyWJ',
  address: {
    streetName: 'Store Kongensgade',
    streetNumber: '124',
    postalCode: '1264',
    city: 'København K'
  }
}

storiesOf('BusinessCard', module).add('Default', () => (
  <div className="p-16">
    <BusinessCard href="#" {...fakeBusiness} />
  </div>
))
