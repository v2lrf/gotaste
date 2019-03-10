const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: 'client' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

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
