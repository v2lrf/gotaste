import React from 'react'
import { storiesOf } from '@storybook/react'

import SearchBar from '.'

storiesOf('SearchBar', module).add('Default', () => (
  <div className="p-16 bg-grey-lighter">
    {/* eslint-disable-next-line no-console */}
    <SearchBar onChange={event => console.log(event)} />
  </div>
))
