import React from 'react'
import PropTypes from 'prop-types'
import { InfoItem } from '../InfoItem'

export function BusinessCard({
  href,
  name,
  streetName,
  streetNumber,
  postalCode,
  city
}) {
  return (
    <a
      href={href}
      className="inline-flex flex-col rounded shadow no-underline hover:shadow-md mb-4"
    >
      <div>
        <img
          src="https://loremflickr.com/512/192"
          alt=""
          className="rounded-t"
        />
      </div>
      <div className="p-4">
        <InfoItem
          imageSrc="https://loremflickr.com/64/64"
          headline={name}
          tagline={`${streetName} ${streetNumber}, ${postalCode} ${city}`}
        />
      </div>
    </a>
  )
}

BusinessCard.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  streetName: PropTypes.string.isRequired,
  streetNumber: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

export default BusinessCard
