import React, { Component, createRef } from 'react'
import Link from 'next/link'
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
        <Spacer top="20" bottom="20">
          <div className="max-w-xs px-4 mx-auto">
            <h2 className="mb-6 text-center text-5xl font-bold text-black">
              Log ind
            </h2>
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
                    placeholder="Din e-mail adresse"
                    /* eslint-disable-next-line */
                    inputRef={el => (this.email = el)}
                  />
                  <Input
                    label="Adgangskode"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Din adgangskode"
                    /* eslint-disable-next-line */
                    inputRef={el => (this.password = el)}
                  />
                  <Button kind="primary" fullWidth>
                    Log ind
                  </Button>
                </form>
              )}
            </Mutation>
            <div className="mt-6 text-sm text-center">
              Eller har du ikke en bruger?
              <Link href="/sign-up">
                <a className="text-red-dark ml-1">Opret en nu</a>
              </Link>
            </div>
          </div>
        </Spacer>
      </Layout>
    )
  }
}

export default withApollo(Login)
