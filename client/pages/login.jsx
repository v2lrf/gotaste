import React, { Component, createRef } from 'react'
import { Mutation, withApollo } from 'react-apollo'
import { gql } from 'apollo-boost'
import Cookies from 'js-cookie'

import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'

import Layout from '../components/Layout'
import Spacer from '../components/Spacer'
import { Input } from '../components/Form'
import Button from '../components/Button'
import Alert from '../components/Alert'

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      authenticationToken
    }
  }
`

class Login extends Component {
  constructor(props) {
    super(props)
    this.email = createRef()
    this.password = createRef()
  }

  static async getInitialProps(context) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)

    if (loggedInUser) {
      redirect(context, '/')
    }

    return {}
  }

  render() {
    /* eslint-disable-next-line */
    const { client } = this.props
    return (
      <Layout>
        <Spacer top="12" bottom="12">
          <div className="max-w-xs px-4 mx-auto">
            <h2 className="mb-6 text-center text-red-darker">Log ind</h2>
            <Mutation
              mutation={SIGN_IN}
              onCompleted={data => {
                Cookies.set('token', data.signIn.authenticationToken, {
                  expires: 30
                })
                client.cache.reset().then(() => {
                  redirect({}, '/')
                })
              }}
              /* eslint-disable-next-line */
              onError={error => {
                // TODO: What to do with the error?
              }}
            >
              {(signinUser, { error }) => (
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    e.stopPropagation()

                    signinUser({
                      variables: {
                        email: this.email.value,
                        password: this.password.value
                      }
                    })
                  }}
                >
                  {error && (
                    <Alert kind="info">
                      Vi kunne ikke finde en bruger med de informationer. Prøv
                      igen.
                    </Alert>
                  )}
                  <Input
                    label="E-mail"
                    name="email"
                    type="email"
                    /* eslint-disable-next-line */
                    inputRef={el => (this.email = el)}
                  />
                  <Input
                    label="Adgangskode"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    /* eslint-disable-next-line */
                    inputRef={el => (this.password = el)}
                  />
                  <Button kind="primary" fullWidth>
                    Log ind
                  </Button>
                </form>
              )}
            </Mutation>
          </div>
        </Spacer>
      </Layout>
    )
  }
}

export default withApollo(Login)
