import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import classNames from 'classnames'

function DateDisplay({ timestamp, className }) {
  const momentTime = moment(timestamp)
  const wrapperClasses = classNames([
    'inline-block bg-white text-center px-2 py-3 h-16 w-16 rounded shadow-md',
    className
  ])
  return (
    <time dateTime={timestamp} className={wrapperClasses}>
      <span className="block text-red-dark font-bold text-2xl">
        {momentTime.format('D')}
      </span>
      <span className="block text-grey-darker text-xs font-bold uppercase">
        {momentTime.format('MMM')}
      </span>
    </time>
  )
}

DateDisplay.propTypes = {
  timestamp: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  className: PropTypes.string
}

DateDisplay.defaultProps = {
  className: ''
}

export default DateDisplay
