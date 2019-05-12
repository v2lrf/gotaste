const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const next = require('next')
const path = require('path')
const proxy = require('express-http-proxy')

const createRemoteSchema = require('./remote-schema')
const config = require('./config')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, dir: 'client' })
const handle = app.getRequestHandler()

const proxyIdURL = dev ? config.DEV_API_ENDPOINT : config.PROD_API_ENDPOINT

app.prepare().then(() => {
  createRemoteSchema({
    uri: process.env.GRAPHQL_REMOTE_URL,
    name: 'GoTaste API'
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

    server.get('/robots.txt', (req, res) => {
      res.sendFile(path.join(__dirname, 'static', 'robots.txt'))
    })

    server.get('/sitemap.xml', (req, res) => {
      res.sendFile(path.join(__dirname, 'static', 'sitemap.xml'))
    })

    server.use(
      '/ahoy',
      proxy(proxyIdURL, {
        proxyReqPathResolver: req => `/ahoy${req.url}`
      })
    )

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
    })
  })
})
