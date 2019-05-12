# frozen_string_literal: true

module Types
  class EventOrderEnumType < Types::BaseEnum
    value 'BEGINS_AT_ASC',
          description: 'Order by when the event begin in an ascending order.',
          value:       'begins_at ASC'

    value 'BEGINS_AT_DESC',
          description: 'Order by when the event begins in an descending order.',
          value:       'begins_at DESC'

    value 'NAME_ASC',
          description: 'Order by the event name in an ascending order.',
          value:       'name ASC'

    value 'NAME_DESC',
          description: 'Order by the event name begins in an descending order.',
          value:       'name DESC'
  end
end
