import { configure } from '@storybook/react'

import './application.css'

const req = require.context(
  '../app/javascript/components',
  true,
  /.*story.jsx$/
)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
