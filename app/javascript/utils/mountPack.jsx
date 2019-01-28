import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import { camelCaseKeys } from './transformKeys'
import client from './client'

const mountPack = (componentClass, elementId) => {
  const element = document.getElementById(elementId)

  if (!element) {
    return
  }

  const props = camelCaseKeys(JSON.parse(element.dataset.props))
  const component = React.createElement(componentClass, props)

  ReactDOM.render(
    <ApolloProvider client={client}>{component}</ApolloProvider>,
    element
  )
}

export default mountPack
