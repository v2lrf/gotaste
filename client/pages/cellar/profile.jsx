import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from 'react-apollo-hooks'

import checkLoggedIn, {
  checkOwnerLogin,
  getOwnerSlug
} from '../../lib/checkLoggedIn'
import redirect from '../../lib/redirect'

import useForm from '../../hooks/useForm'

import OwnerLayout from '../../components/Layout/OwnerLayout'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import { Row, Col } from '../../components/Grid'
import Card from '../../components/Card'
import { Input } from '../../components/Form'
import Button from '../../components/Button'
import Alert from '../../components/Alert'
// eslint-disable-next-line
import Editor from '../../components/Editor'

const GET_BUSINESS = gql`
  query getBusiness($slug: String!) {
    business(slug: $slug) {
      name
      website
      phoneNumber
      description
    }
  }
`

const UPDATE_BUSINESS = gql`
  mutation updateBusiness(
    $slug: String!
    $name: String!
    $website: String!
    $phoneNumber: String!
    $description: String!
  ) {
    updateBusiness(
      input: {
        businessSlug: $slug
        attributes: {
          name: $name
          website: $website
          phoneNumber: $phoneNumber
          description: $description
        }
      }
    ) {
      business {
        id
      }
    }
  }
`

function CellarProfilePage({ slug }) {
  const { data, loading, refetch } = useQuery(GET_BUSINESS, {
    variables: {
      slug
    }
  })
  const { values, setValues, handleChange } = useForm({
    name: '',
    website: '',
    phoneNumber: '',
    description: ''
  })
  const [editorState, setEditorState] = useState('')
  const [updateBusinessAlert, setUpdateBusinessAlert] = useState('')
  const updateBusiness = useMutation(UPDATE_BUSINESS, {
    update: () => {
      setUpdateBusinessAlert('Profil opdateret!')
      refetch()
    },
    variables: {
      slug,
      name: values.name,
      website: values.website,
      phoneNumber: values.phoneNumber,
      description: editorState
    }
  })

  useEffect(() => {
    if (!loading) {
      const {
        business: { name, website, phoneNumber, description }
      } = data
      setValues({
        name,
        website,
        phoneNumber
      })
      setEditorState(description)
    }
  }, [data])

  if (loading) return 'loading..'

  return (
    <OwnerLayout>
      <Container>
        <Spacer top="12" bottom="20">
          <Card title="Opdater profil">
            <form
              onSubmit={e => {
                e.preventDefault()
                e.stopPropagation()
                updateBusiness()
              }}
            >
              <Row className="border-b mb-6 pb-4">
                <Col xs="full" md="1/3">
                  <span className="text-grey-darker">Detaljer</span>
                </Col>
                <Col xs="full" md="2/3">
                  <Input
                    label="Navn"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <Input
                    label="Website"
                    name="website"
                    type="url"
                    value={values.website}
                    onChange={handleChange}
                  />
                  <Input
                    label="Telefon nummer"
                    name="phoneNumber"
                    type="tel"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="border-b mb-6 pb-4">
                <Col xs="full" md="1/3">
                  <span className="text-grey-darker">Beskrivelse</span>
                </Col>
                <Col xs="full" md="2/3">
                  <Editor
                    initialState={editorState}
                    onChange={value => setEditorState(value)}
                  />
                </Col>
              </Row>
              <div className="text-right">
                <Button kind="primary">Gem ændringer</Button>
              </div>
            </form>
          </Card>
          {updateBusinessAlert && (
            <Alert kind="info">{updateBusinessAlert}</Alert>
          )}
        </Spacer>
      </Container>
    </OwnerLayout>
  )
}

CellarProfilePage.getInitialProps = async context => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)
  if (!checkOwnerLogin(loggedInUser)) {
    redirect(context, '/')
  }

  return {
    slug: getOwnerSlug(loggedInUser)
  }
}

CellarProfilePage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default withApollo(CellarProfilePage)
