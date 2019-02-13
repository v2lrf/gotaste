import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Image } from 'cloudinary-react'

function InfoItem({ imageSrc, imageAlt, headline, tagline, large }) {
  const figureClasses = classnames(
    'flex flex-no-shrink self-start mr-2 bg-white shadow rounded-full',
    {
      'w-12 h-12': !large,
      'w-16 h-16': large
    }
  )
  const headlineClasses = classnames('text-black font-bold', {
    'text-base': !large,
    'text-xl': large
  })
  const taglineClasses = classnames('text-grey-darker', {
    'text-sm': !large,
    'text-base': large
  })

  return (
    <div className="flex items-center">
      <figure className={figureClasses}>
        <Image
          cloudName="dkrjpli3y"
          publicId={imageSrc}
          width="200"
          crop="scale"
          className="rounded-full"
          alt={imageAlt}
          secure="true"
        />
      </figure>
      <div className="flex-grow">
        <div className={headlineClasses}>{headline}</div>
        <div className={taglineClasses}>{tagline}</div>
      </div>
    </div>
  )
}

InfoItem.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  headline: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  large: PropTypes.bool
}

InfoItem.defaultProps = {
  imageSrc: null,
  imageAlt: '',
  large: false
}

export default InfoItem
