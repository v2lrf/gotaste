const fs = require('fs')
const path = require('path')
const fetch = require('isomorphic-unfetch')
const sm = require('sitemap')

const config = require('./config')

const ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? config.PROD_ENDPOINT
    : config.DEV_ENDPOINT

function buildSitemap(data) {
  const { upcomingEvents, pastEvents, businesses } = data
  const mergedEventNodes = {
    ...upcomingEvents.nodes,
    ...pastEvents.nodes
  }
  const sitemap = sm.createSitemap({
    hostname: config.GOVINU_DOMAIN
  })
  const staticPages = [
    '/',
    '/discover',
    '/events',
    '/sign-up',
    '/login',
    '/cookie-and-privacypolicy'
  ]

  staticPages.forEach(page => {
    sitemap.add({
      url: page,
      changefreq: 'daily',
      priority: 0.9
    })
  })

  Object.values(businesses).map(businessNodes =>
    Object.values(businessNodes).forEach(businessNode => {
      sitemap.add({
        url: `/business/${businessNode.slug}`,
        changefreq: 'daily',
        priority: 0.8
      })
    })
  )

  Object.values(mergedEventNodes).forEach(eventNode => {
    sitemap.add({
      url: `/event/${eventNode.slug}`,
      changefreq: 'daily',
      priority: 0.8
    })
  })

  return sitemap
}

function saveSitemap(map) {
  const sitemapPath = path.join(__dirname, 'static', 'sitemap.xml')
  fs.writeFileSync(sitemapPath, map)
}

fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
        query getAllBusinessesAndEvents {
          businesses(orderBy: NAME_ASC) {
            nodes {
              slug
            }
          }
          upcomingEvents: events(whenEventBegins: UPCOMING, orderBy: BEGINS_AT_ASC) {
            nodes {
              slug
            }
          }
          pastEvents: events(whenEventBegins: PAST, orderBy: BEGINS_AT_ASC) {
            nodes {
              slug
            }
          }
        }
        `
  })
})
  .then(result => result.json())
  .then(result => {
    const sitemap = buildSitemap(result.data)
    saveSitemap(sitemap.toXML())
  })
