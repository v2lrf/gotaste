import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Card({ title, textCenter, children }) {
  const cardClasses = classnames('bg-white rounded shadow-lg', {
    'text-center': textCenter
  })

  return (
    <div className={cardClasses}>
      <div className="flex flex-row items-center">
        <div className="flex-1">
          {title && <h4 className="p-4 uppercase text-red-light">{title}</h4>}
          <div className="px-4 pb-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  textCenter: PropTypes.bool
}

Card.defaultProps = {
  title: null,
  textCenter: false
}

export default Card
