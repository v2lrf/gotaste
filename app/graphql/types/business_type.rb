# frozen_string_literal: true

module Types
  class BusinessType < Types::BaseObject
    implements GraphQL::Relay::Node.interface
    implements Addressable
    implements Slugable

    global_id_field :id

    field :name, String, 'Name of the business.', null: false

    field :business_type, BusinessTypeType,
          description: 'Type of the business.'\
                       ' Either a _Shop_, _Bar_ or _Restaurant_',
          null:        false

    field :events, [EventType], 'Events hosted by the business', null: true

    field :opening_hours, [OpeningHourType],
          description: 'Opening hours of the business',
          null:        true

    field :logo_id, String, 'Cloudinary ID of the business logo.', null: true

    field :hero_image_id, String,
          description: 'Cloudinary ID of the business hero image.',
          null:        true

    def events
      Loaders::ForeignKeyLoader.for(Event, :host_id).load([object.id])
    end

    def opening_hours
      Loaders::ForeignKeyLoader.for(OpeningHour, :business_id).load([object.id])
    end
  end
end
