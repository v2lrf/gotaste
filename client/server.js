const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const next = require('next')
const createRemoteSchema = require('./remote-schema')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: 'client' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createRemoteSchema({
    uri: process.env.GRAPHQL_REMOTE_URL,
    name: 'Govinu API'
  }).then(schema => {
    const apollo = new ApolloServer({
      schema,
      tracing: true,
      introspection: true,
      playground: true,
      context: ({ req }) => ({
        token: req.headers.authorization || ''
      })
    })
    const server = express()

    apollo.applyMiddleware({ app: server })

    server.get('/business/:slug', (req, res) =>
      app.render(req, res, '/business', { slug: req.params.slug })
    )

    server.get('/event/:slug', (req, res) =>
      app.render(req, res, '/event', { slug: req.params.slug })
    )

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
    })
  })
})
