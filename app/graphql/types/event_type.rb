# frozen_string_literal: true

module Types
  class EventType < Types::BaseObject
    implements Types::Addressable
    implements Types::Slugable

    field :name, String, 'Name of the event.', null: false
    field :description, String, 'Description of the event.', null: true
    field :url, String, 'URL of where to buy a tick to the event.', null: true

    field :host, BusinessType,
          description: 'Host of the event.',
          null:        false

    field :begins_at, GraphQL::Types::ISO8601DateTime,
          description: 'When the event begins.',
          null:        false

    field :ends_at, GraphQL::Types::ISO8601DateTime,
          description: 'When the event ends.',
          null:        true

    def host
      Loaders::RecordLoader.for(::Business).load(object.host_id)
    end
  end
end
