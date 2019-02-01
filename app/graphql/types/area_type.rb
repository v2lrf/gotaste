# frozen_string_literal: true

module Types
  class AreaType < Types::BaseObject
    field :name, String,
          null:        false,
          description: 'Name of the area.'

    field :slug, String,
          null:        false,
          description: 'A _unique_ slug of the area.'
  end
end
