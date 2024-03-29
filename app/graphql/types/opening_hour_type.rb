# frozen_string_literal: true

module Types
  class OpeningHourType < Types::BaseObject
    field :id, ID, 'ID of the opening hour', null: false
    field :day_of_week, String, 'Name of the day.', null: false

    field :open, GraphQL::Types::ISO8601DateTime,
          description: 'The time of the day the business opens.',
          null:        true

    field :close, GraphQL::Types::ISO8601DateTime,
          description: 'The time of the day the business close.',
          null:        true
  end
end
