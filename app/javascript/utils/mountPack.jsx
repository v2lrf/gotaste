import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { camelCaseKeys } from './transformKeys'

const client = new ApolloClient()

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
