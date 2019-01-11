import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function InfoItem({ imageSrc, imageAlt, headline, tagline, large }) {
  const figureClasses = classnames(
    'flex self-start p-2 mr-2 bg-white shadow rounded-full',
    {
      'w-12 h-12': !large,
      'w-16 h-16': large
    }
  )
  const headlineClasses = classnames('font-bold', {
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
        <img src={imageSrc} className="rounded-full" alt={imageAlt} />
      </figure>
      <div className="flex-grow">
        <div className={headlineClasses}>{headline}</div>
        <div className={taglineClasses}>{tagline}</div>
      </div>
    </div>
  )
}

InfoItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  headline: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  large: PropTypes.bool
}

InfoItem.defaultProps = {
  imageAlt: '',
  large: false
}

export default InfoItem
