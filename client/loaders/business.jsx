import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import { GhostCard, GhostLines } from '../components/Ghost'

function BusinessPageLoader() {
  return (
    <Layout>
      <Container>
        <GhostCard height={500} />
        <div className="py-4">
          <GhostCard height={64} width={50} />
          <div className="mt-2">
            <GhostCard height={16} width={75} />
          </div>
        </div>
        <div className="py-4">
          <GhostLines lines={10} />
        </div>
      </Container>
    </Layout>
  )
}

export default BusinessPageLoader
