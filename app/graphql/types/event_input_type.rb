# frozen_string_literal: true

module Types
  class EventInputType < BaseInputObject
    description 'Attributes for creating or updating an event.'

    argument :name, String, 'Name of the event', required: true

    argument :begins_at, GraphQL::Types::ISO8601DateTime,
             description: 'Timestamp of when the event begins.',
             required:    true

    argument :ends_at, GraphQL::Types::ISO8601DateTime,
             description: 'Timestamp of when the event ends.',
             required:    false

    argument :description, String,
             description: 'A longer description of the event.',
             required:    false

    argument :url, String,
             description: 'The URL that sends the user to the event.',
             required:    false

    argument :price, Float,
             description: 'The price of the event. In DKK.',
             required:    false
  end
end
