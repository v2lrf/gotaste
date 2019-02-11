import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Container } from '.'

storiesOf('Container', module).add('Default', () => (
  <Fragment>
    <Container>I have a fixed width and horizontal auto margin</Container>
  </Fragment>
))
