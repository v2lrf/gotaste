import React from 'react'

import Layout from '../components/Layout'
import Spacer from '../components/Spacer'
import { Input } from '../components/Form'
import Button from '../components/Button'

export default () => (
  <Layout>
    <Spacer top="12" bottom="12">
      <div className="max-w-xs px-4 mx-auto">
        <h2 className="mb-6 text-center text-red-darker">Opret bruger</h2>
        <form>
          <Input label="E-mail" name="email" type="email" />
          <Input
            label="Adgangskode"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <Input label="Fornavn" name="first_name" type="text" />
          <Input label="Efternavn" name="last_name" type="text" />
          <Button kind="primary" fullWidth>
            Opret bruger
          </Button>
        </form>
      </div>
    </Spacer>
  </Layout>
)
