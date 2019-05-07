import React from 'react'
import { storiesOf } from '@storybook/react'

import EventCard from '.'

const fakeEvent = {
  name: 'Blindsmagningsaften',
  beginsAt: '2019-03-07T18:15:00Z',
  slug: '2018-03-07-blindsmagningsaften',
  eventHeroImageId: '5236SxUSokqXQeUdmD9gQFgR',
  host: {
    logoId: 'GoTaste/logos/Wh1V3cNhbCPrv3ZLXcxcgyWJ',
    name: 'Erik Sørensen Vin',
    address: {
      streetName: 'Store Kongensgade',
      streetNumber: '124',
      postalCode: '1264',
      city: 'København K'
    }
  }
}

storiesOf('EventCard', module).add('Default', () => (
  <div className="p-16">
    <EventCard {...fakeEvent} />
  </div>
))
