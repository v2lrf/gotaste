import { withApollo } from 'react-apollo'
import Cookies from 'universal-cookie'

import redirect from '../lib/redirect'

function SignOut({ client }) {
  const cookies = new Cookies()
  cookies.remove('token')
  client.cache.reset().then(() => {
    redirect({}, '/')
  })
  return null
}

export default withApollo(SignOut)
