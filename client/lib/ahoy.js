import Cookies from 'js-cookie'

const isServerSide = typeof window === 'undefined'

// eslint-disable-next-line import/no-mutable-exports
let ahoy = null

if (!isServerSide) {
  // eslint-disable-next-line global-require
  ahoy = require('ahoy.js').default
  ahoy.configure({
    headers: { Authorization: `Bearer ${Cookies.get('token')}` },
    withCredentials: true
  })
}

export default ahoy
