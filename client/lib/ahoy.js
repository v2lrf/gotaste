import Cookies from 'universal-cookie'

const isServerSide = typeof window === 'undefined'

// eslint-disable-next-line import/no-mutable-exports
let ahoy = null

if (!isServerSide) {
  const cookies = new Cookies()
  // eslint-disable-next-line global-require
  ahoy = require('ahoy.js').default
  ahoy.configure({
    headers: { Authorization: `Bearer ${cookies.get('token')}` },
    withCredentials: true
  })
}

export default ahoy
