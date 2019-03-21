import React from 'react'
import { storiesOf } from '@storybook/react'

import { GhostCard, GhostLines } from '.'

storiesOf('Ghost', module)
  .add('GhostCard', () => (
    <div className="p-16">
      <GhostCard height={200} />
    </div>
  ))
  .add('GhostLines', () => (
    <div className="p-16">
      <GhostLines lines={10} />
    </div>
  ))
