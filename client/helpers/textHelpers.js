import moment from 'moment'

export function displayPhoneNumber(phoneNumber) {
  return phoneNumber
    .split(' ')
    .join('')
    .match(/.{1,2}/g)
    .join(' ')
}

export function displayURL(url) {
  return url.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '')
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export function translateWeekDay(weekDay) {
  const weekDays = {
    Monday: 'Mandag',
    Tuesday: 'Tirsdag',
    Wednesday: 'Onsdag',
    Thursday: 'Torsdag',
    Friday: 'Fredag',
    Saturday: 'Lørdag',
    Sunday: 'Søndag'
  }

  if (Object.prototype.hasOwnProperty.call(weekDays, weekDay)) {
    return weekDays[weekDay]
  }

  return null
}

export function formatOpeningHours(open, close) {
  if (!open && !close) {
    return 'Lukket'
  }
  return `${moment(open).format('HH:mm')} - ${moment(close).format('HH:mm')}`
}

export function translateBusinessType(type) {
  if (type === 'SHOP') {
    return 'Vinhandler'
  }

  if (type === 'BAR') {
    return 'Bar'
  }

  return null
}

export default this
