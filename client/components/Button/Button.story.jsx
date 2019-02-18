import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

storiesOf('Button', module)
  .add('Primary', () => (
    <div className="p-16">
      <Button kind="primary">Primary</Button>
    </div>
  ))
  .add('Secondary', () => (
    <div className="p-16">
      <Button kind="secondary">Secondary</Button>
    </div>
  ))
