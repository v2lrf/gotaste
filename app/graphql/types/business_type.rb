# frozen_string_literal: true

module Types
  class BusinessType < Types::BaseObject
    implements GraphQL::Relay::Node.interface
    implements Types::Addressable
    implements Types::Slugable

    global_id_field :id

    field :name, String, 'Name of the business.', null: false

    field :business_type, BusinessTypeType,
          description: 'Type of the business.'\
                       ' Either a _Shop_, _Bar_ or _Restaurant_',
          null:        false

    field :area, AreaType,
          description: 'The Area that the business belongs to',
          null:        false

    field :events, EventConnectionType,
          description: 'Events hosted by the business.',
          null:        true,
          connection:  true do

      argument :when_event_begins, EventBeginsEnumType,
               description: 'When the event begins.',
               required:    true
    end

    field :opening_hours, [OpeningHourType],
          description: 'Opening hours of the business.',
          null:        true

    field :logo_id, String,
          description: 'Cloudinary ID of the business logo.',
          null:        true,
          method:      :full_logo_id

    field :description, String, 'Description of the business.', null: true

    field :short_description, String,
          description: 'Short description of the business.',
          null:        true

    field :hero_image_id, String,
          description: 'Cloudinary ID of the business hero image.',
          null:        true,
          method:      :full_hero_image_id

    def area
      Loaders::RecordLoader.for(::Area).load(object.area_id)
    end

    def events(when_event_begins:)
      scope = when_event_begins == 'PAST' ? ::Event.past : ::Event.upcoming

      Loaders::ForeignKeyLoader.for(scope, :host_id).load([object.id])
    end

    def opening_hours
      Loaders::ForeignKeyLoader
        .for(::OpeningHour, :business_id).load([object.id])
    end
  end
end
