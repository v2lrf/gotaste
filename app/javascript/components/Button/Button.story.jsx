import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
  .add('Primary', () => <Button kind="primary">Primary</Button>)
  .add('Secondary', () => <Button kind="secondary">Secondary</Button>)
