import React from 'react'
import { storiesOf } from '@storybook/react'

import GhostCard from '.'

storiesOf('GhostCard', module).add('Default', () => (
  <div className="p-16">
    <GhostCard width={500} height={200} />
  </div>
))
