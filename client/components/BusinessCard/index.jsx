import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Image } from 'cloudinary-react'

import config from '../../config'

import InfoItem from '../InfoItem'

function BusinessCard({ name, address, logoId, heroImageId, slug }) {
  const { streetName, streetNumber, postalCode, city } = address
  return (
    <Link
      href={{ pathname: '/business', query: { slug } }}
      as={`/business/${slug}`}
    >
      <a className="inline-flex flex-col rounded shadow-lg no-underline mb-4 hover-scale">
        <div>
          <Image
            cloudName={config.cloudinaryCloudName}
            publicId={heroImageId}
            height={200}
            width={600}
            crop="fill"
            className="rounded-t"
            secure="true"
          />
        </div>
        <div className="p-4">
          <InfoItem
            imageSrc={logoId}
            headline={name}
            tagline={`${streetName} ${streetNumber}, ${postalCode} ${city}`}
          />
        </div>
      </a>
    </Link>
  )
}

BusinessCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    streetName: PropTypes.string.isRequired,
    streetNumber: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired,
  logoId: PropTypes.string.isRequired,
  heroImageId: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}
export default BusinessCard
