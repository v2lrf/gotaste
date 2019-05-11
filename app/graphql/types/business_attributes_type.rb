# frozen_string_literal: true

module Types
  class BusinessAttributesType < BaseInputObject
    description 'Attributes for creating or updating a business.'

    argument :name, String, 'Name of the business', required: true
    argument :website, String, "The business's website.", required: false

    argument :phone_number, String,
             description: "The business's phone number.",
             required:    false

    argument :description, String,
             description: 'A longer description of the business.',
             required:    false
  end
end
