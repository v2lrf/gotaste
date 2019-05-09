# frozen_string_literal: true

module Types
  class AddressInputType < BaseInputObject
    description 'Required fields for an address.'

    argument :street_name, String, 'Name of the street.', required: true
    argument :street_number, String, 'House number.', required: true
    argument :postal_code, String, 'Postal code.', required: true
    argument :city, String, 'City of the address.', required: true
  end
end
