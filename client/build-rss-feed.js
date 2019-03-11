const fs = require('fs')
const path = require('path')
const fetch = require('isomorphic-unfetch')
const RSS = require('rss')

const config = require('./config')

const ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? config.PROD_ENDPOINT
    : config.DEV_ENDPOINT

function buildFeed(data) {
  const feed = new RSS({
    title: 'Govinu',
    description: 'Find den bedste vin',
    feed_url: `${config.GOVINU_DOMAIN}/static/rss.xml`,
    site_url: config.GOVINU_DOMAIN,
    image_url: `${config.GOVINU_DOMAIN}/static/govinu-310.png`,
    language: 'da',
    pubDate: new Date()
  })

  data.businesses
    .filter(business => Boolean(business.name))
    .forEach(business => {
      const { name, slug } = business
      feed.item({
        title: name,
        url: `${config.GOVINU_DOMAIN}/business/${slug}`
      })
    })

  data.events
    .filter(event => Boolean(event.name))
    .forEach(event => {
      const { name, slug } = event
      feed.item({
        title: name,
        url: `${config.GOVINU_DOMAIN}/events/${slug}`
      })
    })

  return feed.xml({ indent: true })
}

function saveFeed(feed) {
  const feedPath = path.join(__dirname, 'static', 'rss.xml')
  fs.writeFileSync(feedPath, feed)
}

fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
        query getAllBusinessesAndEvents {
          search(latitude: ${config.DEFAULT_LATITUDE}, longitude: ${
      config.DEFAULT_LONGITUDE
    }, distance: 600000) {
            businesses: nodes {
              ... on Business {
                name
                slug
              }
            }
            events: nodes {
              ... on Event {
                name
                slug
              }
            }
          }
        }
        `
  })
})
  .then(result => result.json())
  .then(result => {
    const feed = buildFeed(result.data.search)
    saveFeed(feed)
  })
