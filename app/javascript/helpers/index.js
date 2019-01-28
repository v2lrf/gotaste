// TODO: Write specs
export function getParameterByName(name, url = window.location.href) {
  const parsedName = name.replace(/[[]]/g, '\\$&')
  // eslint-disable-next-line prefer-template
  const regex = new RegExp('[?&]' + parsedName + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export default getParameterByName
