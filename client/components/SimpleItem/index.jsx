import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SimpleItem({ icon, children }) {
  return (
    <div className="flex items-center py-2">
      <FontAwesomeIcon icon={icon} className="text-grey-darkest" />
      <div className="flex-grow ml-2">{children}</div>
    </div>
  )
}

SimpleItem.propTypes = {
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    icon: PropTypes.array
  }).isRequired,
  children: PropTypes.node.isRequired
}

export default SimpleItem
