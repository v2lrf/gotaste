# frozen_string_literal: true

module Types
  class OpeningHourInputType < BaseInputObject
    description 'Attributes for updating opening hours for a business.'

    argument :id, ID,
             description: 'ID of the opening hour',
             required:    true

    argument :open, String,
             description: 'The time of the day the business opens.',
             required:    true

    argument :close, String,
             description: 'The time of the day the business closes.',
             required:    true
  end
end
