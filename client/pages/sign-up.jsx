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

const SIGN_UP = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signUp(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      authenticationToken
    }
  }
`

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.email = createRef()
    this.password = createRef()
    this.firstName = createRef()
    this.lastName = createRef()
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
              Opret bruger
            </h2>
            <Mutation
              mutation={SIGN_UP}
              onCompleted={data => {
                Cookies.set('token', data.signUp.authenticationToken, {
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
              {(signUpUser, { error }) => (
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    e.stopPropagation()

                    signUpUser({
                      variables: {
                        email: this.email.value,
                        password: this.password.value,
                        firstName: this.firstName.value,
                        lastName: this.lastName.value
                      }
                    })
                  }}
                >
                  {error && (
                    <Alert kind="info">
                      <ul>
                        {error.graphQLErrors[0].message.split(',').map(err => (
                          <li key={err}>{err}</li>
                        ))}
                      </ul>
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
                    placeholder="Vælg en adgangskode"
                    /* eslint-disable-next-line */
                    inputRef={el => (this.password = el)}
                  />
                  <Input
                    label="Fornavn"
                    name="first_name"
                    type="text"
                    placeholder="Dit fornavn"
                    /* eslint-disable-next-line */
                    inputRef={el => (this.firstName = el)}
                  />
                  <Input
                    label="Efternavn"
                    name="last_name"
                    type="text"
                    placeholder="Dit efternavn"
                    /* eslint-disable-next-line */
                    inputRef={el => (this.lastName = el)}
                  />
                  <Button kind="primary" fullWidth>
                    Opret bruger
                  </Button>
                </form>
              )}
            </Mutation>
            <div className="text-sm text-center">
              <div className="mt-6">
                Har du glemt din adgangskode?
                <Link href="#">
                  <a className="text-red-dark ml-1">Nulstil den</a>
                </Link>
              </div>
              <div className="mt-2">
                Eller har du allerede en bruger?
                <Link href="/login">
                  <a className="text-red-dark ml-1">Log ind</a>
                </Link>
              </div>
            </div>
          </div>
        </Spacer>
      </Layout>
    )
  }
}

export default withApollo(SignUp)
