import moment from 'moment'

import config from '../config'

function formatOpeningHours(openingHours) {
  const openingHoursList = []
  openingHours.forEach(openingHoursForDay => {
    const { open, close, dayOfWeek } = openingHoursForDay
    if (open && close) {
      openingHoursList.push({
        '@context': 'https://schema.org/',
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [`${dayOfWeek}`],
        opens: moment(open).format('HH:mm'),
        closes: moment(close).format('HH:mm')
      })
    }
  })
  return openingHoursList
}

function businessStructuredData(business) {
  const { slug, name, heroImageId, logoId, address, openingHours } = business
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    url: `https://govinu.com/business/${slug}`,
    name,
    image: `${config.CL.url(heroImageId, {
      width: 1200,
      height: 500,
      crop: 'scale',
      secure: true
    })}`,
    logo: `${config.CL.url(logoId, {
      width: 200,
      height: 200,
      crop: 'scale',
      secure: true
    })}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.streetName} ${address.streetNumber}`,
      postalCode: address.postalCode,
      addressLocality: address.city
    },
    geo: {
      '@context': 'https://schema.org/',
      '@type': 'GeoCoordinates',
      latitude: address.latitude,
      longitude: address.longitude
    },
    openingHoursSpecification: formatOpeningHours(openingHours)
  })
}

export default businessStructuredData
