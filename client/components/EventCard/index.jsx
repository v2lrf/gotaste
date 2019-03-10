import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import moment from 'moment'
import { Image } from 'cloudinary-react'

import config from '../../config'

import DateDisplay from '../DateDisplay'
import InfoItem from '../InfoItem'

function EventCard({ name, beginsAt, slug, host }) {
  const {
    logoId,
    name: hostName,
    address: { streetName, streetNumber, postalCode, city }
  } = host
  return (
    <Link href={{ pathname: '/event', query: { slug } }} as={`/event/${slug}`}>
      <a className="inline-flex flex-col rounded shadow no-underline hover:shadow-md mb-4">
        <div className="relative">
          <Image
            cloudName={config.cloudinaryCloudName}
            publicId="Govinu/hero_images/6c2543d032ac10028fc849e2b97cb1f7"
            height={200}
            width={600}
            crop="fill"
            className="rounded-t"
            secure="true"
          />
          <DateDisplay
            timestamp={beginsAt}
            className="absolute pin-t pin-l ml-2 mt-2"
          />
        </div>
        <div className="p-4">
          <time dateTime={beginsAt} className="text-grey-darker text-sm">
            {moment(beginsAt)
              .locale('da')
              .format('LLLL')}
          </time>
          <h2 className="mb-4 text-red-darker text-lg">{name}</h2>
          <InfoItem
            imageSrc={logoId}
            headline={hostName}
            tagline={`${streetName} ${streetNumber}, ${postalCode} ${city}`}
          />
        </div>
      </a>
    </Link>
  )
}

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  beginsAt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  host: PropTypes.shape({
    logoId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      streetName: PropTypes.string.isRequired,
      streetNumber: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default EventCard
