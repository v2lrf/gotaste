# frozen_string_literal: true

module Types
  class AreaType < Types::BaseObject
    field :name, String,
          null:        false,
          description: 'Name of the area.'

    field :slug, String,
          null:        false,
          description: 'A _unique_ slug of the area.'

    field :businesses, BusinessType.connection_type,
          description: 'Businessses in the area.',
          null:        true

    def businesses
      Loaders::ForeignKeyLoader.for(Business, :area_id).load([object.id])
    end
  end
end
