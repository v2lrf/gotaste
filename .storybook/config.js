import { configure } from '@storybook/react'
import { configureActions } from '@storybook/addon-actions'

import './application.css'

const req = require.context(
  '../app/javascript/components',
  true,
  /.*story.jsx$/
)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configureActions({
  depth: 100,
  limit: 20
})

configure(loadStories, module)
