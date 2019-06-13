import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import { translateWeekDay } from '../../helpers/textHelpers'

import 'react-datepicker/dist/react-datepicker.css'

function OpeningHourInput({ openingHour, onOpeningHourChange }) {
  const { id, dayOfWeek, open, close } = openingHour

  const [isOpenOnDay, setIsOpenOnDay] = useState(open && close)

  useEffect(() => {
    if (!isOpenOnDay) {
      onOpeningHourChange(id, '', '')
    }
  }, [isOpenOnDay])

  return (
    <div className=" mb-6 pb-4">
      <div className="flex">
        <div>
          <input
            name="isOpen"
            type="checkbox"
            checked={isOpenOnDay}
            onChange={() => setIsOpenOnDay(!isOpenOnDay)}
            className="mr-4"
          />
        </div>
        <div className="pr-6 font-semibold">{translateWeekDay(dayOfWeek)}</div>
        {isOpenOnDay ? (
          <div className="flex">
            <div className="pr-4">
              <div
                className="text-grey-dark uppercase"
                htmlFor={`openingHour${id}`}
              >
                Åbningstid:
                <DatePicker
                  showTimeSelect
                  showTimeSelectOnly
                  selected={Date.parse(open)}
                  onChange={value =>
                    onOpeningHourChange(id, value.toString(), close)
                  }
                  timeIntervals={15}
                  dateFormat="HH:mm"
                  timeFormat="HH:mm"
                  timeCaption="Åben"
                  className="rounded w-full mt-1 py-2 px-3 border focus:outline-none focus:shadow-outline"
                  id={`openingHour${id}`}
                />
              </div>
            </div>
            <div>
              <div className="text-grey-dark uppercase">
                Lukketid:
                <DatePicker
                  showTimeSelect
                  showTimeSelectOnly
                  selected={Date.parse(close)}
                  onChange={value =>
                    onOpeningHourChange(id, open, value.toString())
                  }
                  timeIntervals={15}
                  dateFormat="HH:mm"
                  timeFormat="HH:mm"
                  timeCaption="Luk"
                  className="rounded w-full mt-1 py-2 px-3 border focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
        ) : (
          <div>Lukket</div>
        )}
      </div>
    </div>
  )
}

OpeningHourInput.propTypes = {
  openingHour: PropTypes.shape({
    dayOfWeek: PropTypes.string,
    open: PropTypes.string,
    close: PropTypes.string
  }).isRequired,
  onOpeningHourChange: PropTypes.func.isRequired
}

export default OpeningHourInput
