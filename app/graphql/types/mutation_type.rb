# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, 'An example field added by the generator',
          null: false

    def test_field
      'Hello World'
    end
  end
end
