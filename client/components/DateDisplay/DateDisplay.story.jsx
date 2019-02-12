import React from 'react'
import { storiesOf } from '@storybook/react'

import DateDisplay from '.'

storiesOf('DateDisplay', module).add('Default', () => (
  <div className="p-16 bg-grey-lighter">
    <DateDisplay timestamp={1546627341836} />
  </div>
))
