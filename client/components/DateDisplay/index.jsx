import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

function DateDisplay({ timestamp }) {
  const momentTime = moment(timestamp)
  return (
    <time
      dateTime={timestamp}
      className="inline-block bg-white text-center px-2 py-3 h-16 w-16 rounded shadow"
    >
      <span className="block text-red-darker font-bold text-2xl">
        {momentTime.format('D')}
      </span>
      <span className="block text-grey-darker text-xs font-bold uppercase">
        {momentTime.format('MMM')}
      </span>
    </time>
  )
}

DateDisplay.propTypes = {
  timestamp: PropTypes.number.isRequired
}

export default DateDisplay
