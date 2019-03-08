# frozen_string_literal: true

module Types
  module Slugable
    include Types::BaseInterface

    description 'Types that a slug.'

    field :slug, String,
          description: 'A unique slug of the object.',
          null:        false
  end
end
