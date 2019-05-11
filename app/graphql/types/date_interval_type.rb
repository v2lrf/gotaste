# frozen_string_literal: true

module Types
  class DateIntervalType < Types::BaseEnum
    value 'TODAY',
          description: 'Get results from the last day.',
          value:       1.day.ago..Time.current

    value 'LAST_WEEK',
          description: 'Get results from the last week.',
          value:       1.week.ago..Time.current

    value 'LAST_MONTH',
          description: 'Get results from the last month.',
          value:       1.month.ago..Time.current
  end
end
