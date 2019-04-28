# frozen_string_literal: true

module Types
  class AddressType < Types::BaseObject
    field :street_name, String,
          description: 'Name of the street',
          null:        false

    field :street_number, String,
          description: 'Number of the street',
          null:        false

    field :postal_code, String,
          description: 'Postal code.',
          null:        false

    field :city, String,
          description: 'City the address is located in.',
          null:        false

    field :latitude, Float, 'Latitude of the address.', null: false
    field :longitude, Float, 'Longitude of the address.', null: false
  end
end
