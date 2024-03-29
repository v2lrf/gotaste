import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Image } from 'cloudinary-react'

import config from '../../config'

import FavouriteButton from '../FavouriteButton'
import InfoItem from '../InfoItem'
import { translateBusinessType } from '../../helpers/textHelpers'

function BusinessCard({ name, address, heroImageId, slug, businessType }) {
  const { streetName, streetNumber, postalCode, city } = address
  return (
    <Link
      href={{ pathname: '/business', query: { slug } }}
      as={`/business/${slug}`}
    >
      <a className="inline-flex flex-col rounded shadow-lg no-underline mb-4 hover-scale">
        <div className="relative">
          <Image
            cloudName={config.cloudinaryCloudName}
            publicId={heroImageId}
            height={200}
            width={600}
            crop="fill"
            className="rounded-t"
            secure="true"
          />
          <div className="absolute pin-t pin-r mr-4 mt-4">
            <FavouriteButton businessSlug={slug} />
          </div>
        </div>
        <div className="p-4 border-b border-dotted">
          <InfoItem
            headline={name}
            tagline={`${streetName} ${streetNumber}, ${postalCode} ${city}`}
            businessType={businessType}
          />
        </div>

        <div className="px-4 py-2 text-grey-darker text-xs">
          <Link href={`/businesses?type=${businessType}`}>
            <a className="text-grey-darker no-underline hover:text-grey-darkest">
              {translateBusinessType(businessType)}
            </a>
          </Link>
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
  heroImageId: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  businessType: PropTypes.string.isRequired
}
export default BusinessCard
