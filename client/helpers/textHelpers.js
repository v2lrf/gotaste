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

export default this
