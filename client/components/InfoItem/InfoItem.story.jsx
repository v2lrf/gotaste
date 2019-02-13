import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import InfoItem from '.'

storiesOf('InfoItem', module).add('Default', () => (
  <Fragment>
    <div className="p-16 bg-grey-lighter">
      <InfoItem
        imageSrc="https://via.placeholder.com/150"
        headline="I'm a headline"
        tagline="I'm a tagline"
      />
    </div>
    <div className="p-16 bg-grey-lighter">
      <InfoItem
        imageSrc="https://via.placeholder.com/150"
        headline="I'm a headline"
        tagline="I'm a tagline"
        large
      />
    </div>
  </Fragment>
))
