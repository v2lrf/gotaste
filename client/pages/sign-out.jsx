import { withApollo } from 'react-apollo'
import Cookies from 'js-cookie'

import redirect from '../lib/redirect'

function SignOut({ client }) {
  Cookies.remove('token')
  client.cache.reset().then(() => {
    redirect({}, '/')
  })
  return null
}

export default withApollo(SignOut)
