import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from '.'

storiesOf('Footer', module).add('Default', () => (
  <div className="p-16 bg-white">
    <Footer />
  </div>
))
