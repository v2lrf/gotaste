import React from 'react'
import PropTypes from 'prop-types'

function Card({ title, children }) {
  return (
    <div className="bg-white rounded shadow-lg">
      <div className="flex flex-row items-center">
        <div className="flex-1">
          {title && (
            <h4 className="uppercase text-red-darker p-4 mb-2 border-b">
              {title}
            </h4>
          )}
          <div className="p-4 mb-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

Card.defaultProps = {
  title: null
}

export default Card
