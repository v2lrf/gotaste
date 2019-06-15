import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

  const headlineClasses = classnames('text-black font-bold', {
    'text-base': !large,
    'text-xl': large
  })
  const taglineClasses = classnames('text-grey-darker', {
    'text-sm': !large,
    'text-base': large
  })

  return (
    </div>
  )
}

InfoItem.propTypes = {
  headline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  tagline: PropTypes.string.isRequired,
  large: PropTypes.bool
}

InfoItem.defaultProps = {
  large: false
}

export default InfoItem
