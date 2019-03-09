# frozen_string_literal: true

module Types
  class EventBeginsEnumType < Types::BaseEnum
    value 'PAST', 'The event has already taken place.'
    value 'UPCOMING', 'The event is upcoming.'
  end
end
