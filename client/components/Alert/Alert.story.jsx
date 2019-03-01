import React from 'react'
import { storiesOf } from '@storybook/react'

import Alert from '.'

storiesOf('Alert', module)
  .add('Info', () => (
    <div className="p-16">
      <Alert kind="info">Hey I just want you to know that I love wine!</Alert>
    </div>
  ))
  .add('Danger', () => (
    <div className="p-16">
      <Alert kind="danger">
        Whoa! We are out of wine. Hurry up and go get some
      </Alert>
    </div>
  ))
