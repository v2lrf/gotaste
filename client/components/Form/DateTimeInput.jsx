import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function DateTimeInput({ label, value, onChange, noPastDates, notBeforeDate }) {
  function getAdditionalProps() {
    const additionalProps = {}
    if (noPastDates) {
      additionalProps.minDate = new Date()
    }
    if (notBeforeDate) {
      additionalProps.minDate = notBeforeDate
    }
    return additionalProps
  }

  return (
    // Disable eslint because "react-datepicker" does render an input field so the label is valid
    // eslint-disable-next-line
    <label className="block text-grey-darker mb-6 text-sm uppercase">
      {label}
      <DatePicker
        showTimeSelect
        selected={value}
        onChange={onChange}
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="d MMMM, yyyy - HH:mm"
        timeCaption="time"
        showWeekNumbers
        className="block w-full rounded w-full mt-1 py-2 px-3 border focus:outline-none focus:shadow-outline"
        {...getAdditionalProps()}
      />
    </label>
  )
}

DateTimeInput.propTypes = {
  label: PropTypes.string.isRequired,
  // eslint disabled because "value" is a Date object with no shape
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  noPastDates: PropTypes.bool,
  // eslint disabled because "notBeforeDate" is a Date object with no shape
  // eslint-disable-next-line react/forbid-prop-types
  notBeforeDate: PropTypes.object
}

DateTimeInput.defaultProps = {
  noPastDates: false,
  notBeforeDate: null
}

export default DateTimeInput
