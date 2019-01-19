# frozen_string_literal: true

module Types
  class BusinessType < Types::BaseObject
    global_id_field :id

    implements GraphQL::Relay::Node.interface

    field :name, String, 'Name of the business.', null: false
    field :street_name, String,
          description: 'Name of the street where the business is located.',
          null:        false

    field :street_number, String,
          description: 'Number of the street where the business is located.',
          null:        false

    field :postal_code, String,
          description: 'Postal code for the business.',
          null:        false

    field :city, String,
          description: 'City the business is located in.',
          null:        false

    field :latitude, Float, 'Latitude of the business.', null: false
    field :longitude, Float, 'Longitude of the business.', null: false
    field :business_type, BusinessTypeType,
          description:    "Type of the business.
                           Either a _Shop_, _Bar_ or _Restaurant_",
          null:           false

    field :events, [EventType], 'Events hosted by the business', null: true

    field :opening_hours, [OpeningHourType],
          description: 'Opening hours of the business',
          null:        true

    field :slug, String, 'Slug of the business.', null: false

    def events
      Loaders::ForeignKeyLoader.for(Event, :host_id).load([object.id])
    end

    def opening_hours
      Loaders::ForeignKeyLoader.for(OpeningHour, :business_id).load([object.id])
    end
  end
end
